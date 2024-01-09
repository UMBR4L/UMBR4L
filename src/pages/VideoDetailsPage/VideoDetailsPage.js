import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import MainVideo from "../../components/MainVideo/MainVideo";
import VideoDetails from "../../components/VideoDetails/VideoDetails";
import CommentSection from "../../components/CommentSection/CommentSection";
import CommentForm from "../../components/CommentForm/CommentForm";
import NextVideosList from "../../components/NextVideosList/NextVideosList";

import { apiURL, apiKey } from "../../utils/api";

function VideoDetailsPage() {
  const { videoId } = useParams(); // This retrieves the videoId from the URL
  const [currentVideo, setCurrentVideo] = useState(null);
  const [nextVideos, setNextVideos] = useState([]);

  useEffect(() => {
    // Fetching the details of the current video
    axios
      .get(`${apiURL}/videos/${videoId}?api_key=<${apiKey}>`)
      .then((response) => {
        setCurrentVideo(response.data);
      })
      .catch((error) => {
        console.error("Error fetching video details", error);
      });

    // Fetching the list of all videos
    axios
      .get(`${apiURL}/videos?api_key=<${apiKey}>`)
      .then((response) => {
        // filter out the currently displayed video from the list of videos
        setNextVideos(response.data.filter((video) => video.id !== videoId));
      })
      .catch((error) => {
        console.error("Error fetching videos list", error);
      });
  }, [videoId]);

  if (!currentVideo) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <MainVideo src={currentVideo.video} poster={currentVideo.image} />
      <VideoDetails
        title={currentVideo.title}
        author={currentVideo.channel}
        views={currentVideo.views}
        likes={currentVideo.likes}
        description={currentVideo.description}
        date={currentVideo.timestamp}
      />
      <CommentForm commentCount={currentVideo.comments.length} />
      <CommentSection comments={currentVideo.comments} />
      <NextVideosList videos={nextVideos} />
    </>
  );
}

export default VideoDetailsPage;
