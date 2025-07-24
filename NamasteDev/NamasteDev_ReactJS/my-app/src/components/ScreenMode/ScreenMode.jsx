import React from "react";
import FullScreenLogo from "../../assets/icons/fullscreen.png"; // Adjust path

import "./ScreenMode.css"; // You can add styles here or keep using the same `.fullscreen` class

const ScreenMode = ({ isFullscreen, setIsFullscreen }) => {
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <img
      src={FullScreenLogo}
      alt="Toggle Fullscreen"
      className="fullscreen"
      onClick={toggleFullscreen}
    />
  );
};

export default ScreenMode;
 