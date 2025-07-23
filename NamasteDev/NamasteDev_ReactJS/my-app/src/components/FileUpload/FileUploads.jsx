import React, { useState } from "react";
import { fileUploadData } from "../../data/fileUploadData";
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import ResizableLayout from "../ResizableLayout/ResizableLayout";
import FileIcon from "../../assets/icons/file-icon.svg"
import '../AssessmentInput/AssessmentInput.css';
import Shimmer from "../Shimmer/Shimmer"; //July 22
import ConfirmIcon from "../../assets/icons/confirm-icon.png";

const FileUploads = ({ stepId, setIsConfirmed, setShowObservationContent,setActiveSidePanelContent }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]); // All uploaded files
  const [activeIframeUrl, setActiveIframeUrl] = useState(""); // Displayed iframe
    const [isUploading, setIsUploading] = useState(false);//July 22
  const [showObservationPanel, setShowObservationPanel] = useState(false); // July 22


  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const [openFileView, setOpenFileView] = useState(false);

  const fileStep = fileUploadData.find((file) => file.id === stepId);
  if (!fileStep) return null;

  const handleClick = (event, buttonType) => {
    if (buttonType === "Proceed") {
      console.log("Proceed clicked");
       setIsConfirmed(true);//July 22

      if (stepId === 3) {
        setShowObservationContent?.(true);
        setShowObservationPanel(true);
      }//July 22
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
     setIsUploading(true);//July 22

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

      setUploadedFiles((prev) => {
        const isDuplicate = prev.some(f => f.fileName === newFile.fileName);
        return isDuplicate ? prev : [...prev, newFile];
      });
      setIsFileUploaded(true);

    } catch (error) {
      alert("Upload failed");
      setIsFileUploaded(false);
      console.error(error);
    } finally {
      setIsUploading(false);//July 22
    }
  };

  const handleConfirm = () => {
    setIsConfirmed(true)
  }

  const renderUploadedFileList = () => {
    return (
      <>
        {uploadedFiles.map((file, index) => (
          <div
            key={index}
            className="p-3 bg-white border rounded shadow cursor-pointer hover:bg-blue-50"
            onClick={() => {
              setActiveIframeUrl(file.officeUrl);
              setOpenFileView(true);
                setShowObservationPanel(false);//July 22
            }}
          >
            <div className="file-icon-wrapper">
              <img src={FileIcon} className="devobjicon" alt="dev icon" />
              <span>{file.fileName}</span>
            </div>
          </div>
        ))}
      </>
    );
  };

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
      </div>
      {isUploading && <Shimmer />}
      {/* 21st */}  
      {uploadedFiles.length > 0 && (
        <div className="agent-flex-wrapper">
          <ResizableLayout
            stepId={stepId}
            activeIframeUrl={openFileView ? activeIframeUrl : ""}
            uploadedFiles={uploadedFiles}
            onFileClick={(url) => {
              setActiveIframeUrl(url);
              setOpenFileView(true);
            }}
            customLeftContent={renderUploadedFileList()}
            customContent={
              openFileView ? (
                <div className="extracts-wrapper">
                  <h3>
                    {stepId === 2 ? 'Production Logs' : 'Extracts containing Metadata'}
                  </h3>
                 <button className="confirm-btn" onClick={handleConfirm}>
                   <img src={ConfirmIcon} className='confirm-tick-img' />
                    Confirm
                  </button>
                </div>
              ) : null
            }

              setActiveSidePanelContent={setActiveSidePanelContent}
            showObservationPanel={showObservationPanel}
          />
        </div>
      )}

    </React.Fragment>
  );
};

export default FileUploads;
 