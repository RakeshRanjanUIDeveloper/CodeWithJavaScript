import React from "react";
import FullScreenLogo from "../../../assets/icons/fullscreen.png"; 
import NormalScreenLogo from "../../../assets/icons/normalscreen.svg";

import "./ScreenMode.css";

const ScreenMode = ({ isFullscreen, setIsFullscreen }) => {
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  return (
    <img
      src={isFullscreen ? NormalScreenLogo : FullScreenLogo}
      className="fullscreen"
      onClick={toggleFullscreen}
    />
  );
};

export default ScreenMode;
 