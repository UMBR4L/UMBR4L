import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";

import Header from "./components/Header/Header";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";

import "./App.scss";

const apiURL = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [firstVideoId, setFirstVideoId] = useState("");

  useEffect(() => {
    axios
      // fetch the list of videos
      .get(`${apiURL}/videos?api_key=${apiKey}`)
      // If there are videos in the list of videos,
      // get the videoID of the first video
      .then((response) => {
        if (response.data.length > 0) {
          setFirstVideoId(response.data[0].id);
        }
      })
      .catch((error) => console.error("Error fetching videos", error));
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              firstVideoId ? (
                <Navigate to={`/videos/${firstVideoId}`} />
              ) : (
                <div>Loading...</div>
              )
            }
          />
          <Route path="/videos/:videoId" element={<VideoDetailsPage />} />
          <Route path="/upload" element={<VideoUploadPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
