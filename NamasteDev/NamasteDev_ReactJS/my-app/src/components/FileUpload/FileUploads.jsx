import React, { useState } from "react";
import { fileUploadData } from "../../data/fileUploadData";
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import ResizableLayout from "../ResizableLayout/ResizableLayout";
import '../AssessmentInput/AssessmentInput.css';

const FileUploads = ({ stepId, setIsConfirmed }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]); // All uploaded files
  const [activeIframeUrl, setActiveIframeUrl] = useState(""); // Displayed iframe


  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [openFileView, setOpenFileView] = useState(false);

  const fileStep = fileUploadData.find((file) => file.id === stepId);
  if (!fileStep) return null;

  const handleClick = (event, buttonType) => {
    if (buttonType === "Proceed") {
      console.log("Proceed clicked");
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

      const newFile = {
        fileName: file.name,
        officeUrl,
      };

      setUploadedFiles((prev) => [...prev, newFile]);
      setIsFileUploaded(true);
    } catch (error) {
      alert("Upload failed");
      setIsFileUploaded(false);
      console.error(error);
    }
  };
  const handleConfirm = () => {
    setIsConfirmed(true)
  }
  return (
    <React.Fragment>
      <div className="agent-flex-wrapper">
        <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
        <div className="help-content">
          <p>{fileStep.fileTitle}</p>
          <div className="selected-options-wrapper">
            {fileStep.fileButtons.map((fileButton, idx) =>
              fileButton !== "Upload" ? (
                <label
                  className="options-btn upload-click"
                  onClick={(e) => handleClick(e, fileButton)}
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
              )
            )}
          </div>
        </div>
        {
          isFileUploaded && (uploadedFiles.map((file, index) => (
            <div
              key={index}
              className="p-3 bg-white border rounded shadow cursor-pointer hover:bg-blue-50"
              onClick={() => {
                setActiveIframeUrl(file.officeUrl);
                setOpenFileView(true)
              }}
            >
              {file.fileName}
            </div>

          )))
        }

      </div>
      {/* {
        isFileUploaded && openFileView && <div className="agent-flex-wrapper">
          <div className="extracts-wrapper">
            <button className="confirm-btn" onClick={handleConfirm}>
              Confirm
            </button>
          </div>
          <ResizableLayout activeIframeUrl={activeIframeUrl} onConfirm={handleConfirm} />
        </div>
      } */}
      {
        isFileUploaded && openFileView && (
          <div className="agent-flex-wrapper">
            <ResizableLayout
              activeIframeUrl={activeIframeUrl}
              uploadedFiles={uploadedFiles}
              onFileClick={(url) => setActiveIframeUrl(url)}
              customContent={
                <div className="extracts-wrapper">
                  <h3>Extracts containing Metadata</h3>
                  <button className="confirm-btn" onClick={handleConfirm}>
                    Confirm
                  </button>
                </div>
              }
            />
          </div>
        )
      }

    </React.Fragment>
  );
};

export default FileUploads;
