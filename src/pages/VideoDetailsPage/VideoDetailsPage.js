import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import MainVideo from "../../components/MainVideo/MainVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentSection from "../../components/CommentSection/CommentSection";
import CommentForm from "../../components/CommentForm/CommentForm";
import NextVideosList from "../../components/NextVideosList/NextVideosList";

import videoDetails from '../../data/video-details.json'; // adjust path as needed
import nextVideos from '../../data/videos.json'; // adjust path as needed

function VideoDetailsPage() {
  const { videoId } = useParams(); // This retrieves the videoId from the URL
  const [currentVideo, setCurrentVideo] = useState(null);

  useEffect(() => {
    // Find the video in your data that matches the videoId
    const video = videoDetails.find(video => video.id === videoId);
    setCurrentVideo(video);
  }, [videoId]);

  if (!currentVideo) {
    return <div>Loading...</div>; 
  }

  return (
    <>
      <MainVideo
        src={currentVideo.video}
        poster={currentVideo.image}
      />
      <VideoDetails
        title={currentVideo.title}
        author={currentVideo.channel}
        views={currentVideo.views}
        likes={currentVideo.likes}
        description={currentVideo.description}
        date={currentVideo.timestamp}
      />
      <CommentForm />
      <CommentSection comments={currentVideo.comments} />
      <NextVideosList videos={nextVideos} />
    </>
  );
}

export default VideoDetailsPage;
