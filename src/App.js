import logo from './logo.svg';
import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import VideoUpload from './components/VideoUpload/VideoUpload';
import MainVideo from './components/MainVideo/MainVideo';
import VideoDetails from './components/VideoDetails/VideoDetails';
import CommentSection from './components/CommentSection/CommentSection';
import CommentForm from './components/CommentForm/CommentForm';
import NextVideosList from './components/NextVideosList/NextVideosList';

// oUR data files (they get turned into arrays)
import videoDetails from "./assets/Data/video-details.json";
import nextVideos from "./assets/Data/videos.json";

function App() {
  // write comments HERE What does this do?
  const [videoIndex, setVideoIndex] = useState(0);
  
  // This function changes our video index and makes our site dynamic
  const changeVideo = (index) => {
    setVideoIndex(index)
  };

  return (
    <div className="App">
      <Header />
      <SearchBar />
      <VideoUpload />
      <MainVideo src={videoDetails[videoIndex].video} />
      <VideoDetails 
        title={videoDetails[videoIndex].title} 
        author={videoDetails[videoIndex].channel} 
        views={videoDetails[videoIndex].views}
        likes={videoDetails[videoIndex].likes} 
        description={videoDetails[videoIndex].description} 
      />
      <CommentForm/>
      <CommentSection comments={videoDetails[videoIndex].comments} />

      {/* PASSING THE ABOve function down to this component because it's responsible for changing the video*/}
      <NextVideosList videos={nextVideos} onVideoSelect={changeVideo}  />
    </div>
  );
}

export default App;
