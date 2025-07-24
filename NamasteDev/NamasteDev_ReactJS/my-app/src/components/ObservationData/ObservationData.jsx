import React from "react";
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import { UploadedFiles } from "../../data/UploadedFiles";
import FileIcon from "../../assets/icons/file-icon.svg";

const ObservationData = ({ onViewObservationClick }) => {
  const observationData = UploadedFiles.find((file) => file.id === "3");
  if (!observationData) return null;

  return (
    <div className="agent-flex-wrapper">
      <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
      <div class="help-content">
        <p class="upload-success-msg">{observationData.label}</p>
        <div
          className="file-icon-wrapper"
          onClick={() => {
            console.log("Clicked View Observations"); // check browser console
            onViewObservationClick();
          }}
          style={{ cursor: "pointer" }}
        >
          {/* 22-july */}
          <img src={FileIcon} className="devobjicon" alt="file icon" />
          <span>View Observations</span>
        </div>
      </div>
    </div>
  );
};

export default ObservationData;
