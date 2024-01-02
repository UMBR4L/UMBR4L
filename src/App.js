import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import MainVideo from './components/MainVideo/MainVideo';
import VideoDetails from './components/VideoDetails/VideoDetails';
import CommentSection from './components/CommentSection/CommentSection';
import CommentForm from './components/CommentForm/CommentForm';
import NextVideosList from './components/NextVideosList/NextVideosList';

// oUR data files (they get turned into arrays)
import videoDetails from "./data/video-details.json";
import nextVideos from "./data/videos.json";

function App() {
  // React Hook that changes the main video displayed onVideoSelect
  const [videoIndex, setVideoIndex] = useState(0);
  
  // This function changes our video index and makes our site dynamic
  const changeVideo = (index) => {
    setVideoIndex(index)
  };

  return (
    <div className="App">
      <Header />
      <MainVideo src={videoDetails[videoIndex].video} poster={videoDetails[videoIndex].image}/>
      <VideoDetails 
        title={videoDetails[videoIndex].title} 
        author={videoDetails[videoIndex].channel} 
        views={videoDetails[videoIndex].views}
        likes={videoDetails[videoIndex].likes} 
        description={videoDetails[videoIndex].description}
        date={videoDetails[videoIndex].timestamp} 
      />
      <CommentForm/>
      <CommentSection comments={videoDetails[videoIndex].comments} />

      {/* PASSING THE ABOve function down to this component because it's responsible for changing the video*/}
      <NextVideosList videos={nextVideos} onVideoSelect={changeVideo}  />
    </div>
  );
}

export default App;
