  // FileUploads.jsx
import React, { useState } from "react";
import { fileUploadData } from "../../data/fileUploadData";
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import FileIcon from "../../assets/icons/file-icon.svg";
import "../AssessmentInput/AssessmentInput.css";
import Shimmer from "../Shimmer/Shimmer";
import useShimmer from "../Shimmer/useShimmer";
import { shimmerHeaders } from "../../data/ShimmerHeaders";
import { stepHeadings } from '../../data/RightPanelHeaders';

const FileUploads = ({
  stepId,
  setIsConfirmed,
  setShowObservationContent,
  setActiveIframeUrl,
  setShowFileViewer,
  setFileViewerContent,
  setSidePanelHeading
}) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const showShimmer = useShimmer(isUploading, 5000);
  const shimmerHeader = shimmerHeaders.find(item => item.id === stepId)?.text || "Uploading file...";
  const fileStep = fileUploadData.find((file) => file.id === stepId);
  if (!fileStep) return null;

  const handleClick = (event, buttonType) => {
    if (buttonType === "Proceed") {
      setIsConfirmed(true);
      if (stepId === 3) {
        setShowObservationContent?.();
      }
    } else if (buttonType === "Upload") {
      handleUpload(event);
    }
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_excel_upload");
    setIsUploading(true);

    try {
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/drb6o9edj/auto/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();
      const publicUrl = data.secure_url;
      const officeUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(
        publicUrl
      )}`;

      const newFile = { fileName: file.name, officeUrl };
      setUploadedFiles((prev) =>
        prev.some((f) => f.fileName === file.name) ? prev : [...prev, newFile]
      );
      setIsFileUploaded(true);
    } catch (error) {
      alert("Upload failed");
      setIsFileUploaded(false);
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <React.Fragment>
      <div className="agent-flex-wrapper">
        <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
        <div className="help-content">
          <p>{fileStep.fileTitle}</p>
          <div className="selected-options-wrapper">
            {fileStep.fileButtons.map((fileButton, idx) => {
              const isProceed = fileButton === "Proceed";
              const isDisabledProceed =
                isProceed && (stepId === 1 || stepId === 2);
              return fileButton !== "Upload" ? (
                <label
                  className={`options-btn upload-click ${isDisabledProceed ? "disabled" : ""
                    }`}
                  onClick={(e) =>
                    !isDisabledProceed && handleClick(e, fileButton)
                  }
                  key={idx}
                >
                  {fileButton}
                </label>
              ) : (
                <label className="options-btn upload-click" key={idx}>
                  {fileButton}
                  <input
                    type="file"
                    onChange={(e) => handleClick(e, fileButton)}
                    style={{ display: "none" }}
                  />
                </label>
              );
            })}
          </div>
        </div>
      </div>

 {showShimmer && (
        <div style={{paddingLeft: '3.5vw'}}>
          <Shimmer headerText={shimmerHeader} />
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div className="agent-flex-wrapper">
          <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
          <div className="help-content">

            <p className="upload-success-msg">{fileStep.uploadSuccessMessage}</p>
            {uploadedFiles.map((file, index) => (
              <div
                key={index}
                className="p-3 bg-white border rounded shadow cursor-pointer hover:bg-blue-50"
                onClick={() => {
                  const selectedHeading = stepHeadings.find(item => item.id === stepId)?.label;
                  setSidePanelHeading(selectedHeading);
                  setActiveIframeUrl?.(file.officeUrl);
                  setShowFileViewer?.(true);
                  setFileViewerContent?.("excel");
                }}
              >
                <div className="file-icon-wrapper">
                  <img src={FileIcon} className="devobjicon" alt="file icon" />
                  <span>{file.fileName}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default FileUploads;
