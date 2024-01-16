import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import defaultUploadImage from '../../assets/images/Upload-video-preview.jpg' // Hardcoded image path
// import './VideoUploadPage.scss';

function VideoUploadPage() {
  // Use states to manage the values of the title and descriptions
  // to make the form elements into controlled components
  // which allows us to manipulate form data, validate, and submit the form
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  // Event Handler for upload form
  const handleSubmit = (e) => {
    e.preventDefault();

    const apiURL = process.env.REACT_APP_API_URL;
    const apiKey = process.env.REACT_APP_API_KEY;

    if (title && description) {
      // Construct the video object with title, description, and hardcoded image
      const newVideo = {
        title,
        description,
        image: defaultUploadImage, 
      };
      axios
        .post(`${apiURL}/videos?api_key=${apiKey}`, newVideo)
        .then((response) => {
          alert(
            `Video Titled: "${title}" with description: "${description}" uploaded successfully!`
          );
          navigate("/"); // Redirect to the home page
        })
        .catch((error) => {
          console.error("Error uploading video: ", error);
          alert("Failed to upload video.");
        });
    } else {
      alert(`Title and description are required.`);
    }
  };

  return (
    <div className="video-upload-page">
      <h1>Upload Video</h1>
      <form onSubmit={handleSubmit} className="video-upload-form">
        <label htmlFor="title">Title Your Video</label>
        {/* use 'htmlFor' to associate the label element with the input element */}
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a title to your video"
        />

        <label htmlFor="description">Add a Video Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Add a description to your video"
        />

        <div className="form-actions">
          <button type="submit" className="publish-button">
            Publish
          </button>
          <button
            type="button"
            className="cancel-button"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default VideoUploadPage;
