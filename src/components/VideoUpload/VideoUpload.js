import React from "react";
import { Link } from "react-router-dom";

import "./VideoUpload.scss";

function VideoUpload() {
  return (
    <Link to="/upload" className="header__upload-link">
      <button className="header__upload-button labels-buttons">Upload</button>
    </Link>
  );
}

export default VideoUpload;
