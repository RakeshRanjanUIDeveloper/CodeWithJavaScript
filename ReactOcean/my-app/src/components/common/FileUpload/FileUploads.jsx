import React, { useState, useContext, useEffect } from "react";
import DevObjectsIcon from "../../../assets/icons/dev-objects-icon.svg";
import FileIcon from "../../../assets/icons/file-icon.svg";
import "../AssessmentInput/AssessmentInput.css";
import Shimmer from "../Shimmer/Shimmer";
import useShimmer from "../Shimmer/useShimmer";
import { stepHeadings } from '../../../data/RightPanelHeaders';
import MainFrameContext from "../../context/MainFrameContext";

const FileUploads = ({
  shimmerHeadersList,
  fileUploadDataList,
  stepId,
  onProceed,
  setActiveIframeUrl,
  setShowFileViewer,
  setFileViewerContent,
  // setSidePanelHeading, 
  hierarchy,
  hierarchyStep,
}) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const [isFileUploaded, setIsFileUploaded] = useState(false);
  const showShimmer = useShimmer(isUploading, 5000);
  const shimmerHeader = shimmerHeadersList?.find(item => item.id === stepId)?.text || "Uploading file...";
  const fileStep = fileUploadDataList.find((file) => file.id === stepId);
  if (!fileStep) return null;
  const { setSelectedComponent, uploadeadFile, setUploadeadFile, setIsRightPanelOpen, setHierarchy, updateHierarchyStep, hierarchySteps} = useContext(MainFrameContext);

  useEffect(() =>{
    let normalizedHierarchy = [];
    if(Array.isArray(hierarchy)){
      normalizedHierarchy= hierarchy;
    }else if(typeof hierarchy === 'string' && hierarchy.trim() !== ''){
      normalizedHierarchy = [hierarchy];
    }
    setHierarchy(normalizedHierarchy);
    updateHierarchyStep(normalizedHierarchy, hierarchyStep);
  },  [hierarchy, hierarchyStep])
  
  console.log(hierarchy, hierarchyStep,hierarchySteps)

  const handleClick = (event, buttonType) => {
    if (buttonType === "Proceed") {
      onProceed?.();
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
      setUploadeadFile(newFile)
      setIsFileUploaded(true);
    } catch (error) {
      alert("Upload failed");
      setIsFileUploaded(false);
      console.error(error);
    } finally {
      setIsUploading(false);
    }
  };
  console.log(uploadeadFile, "uploadedFiles");

  return (
    <React.Fragment>
      <div className="agent-flex-wrapper">
        <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
        <div className="help-content">
          <p>{fileStep.fileTitle}</p>
          <div className="selected-options-wrapper">
            {fileStep.fileButtons.map((fileButton, idx) => {
              const isProceed = fileButton === "Proceed";
              const hasUploadAndProceed = fileStep.fileButtons.includes("Upload") && fileStep.fileButtons.includes("Proceed");
              const isDisabledProceed = isProceed && hasUploadAndProceed;
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
                  // const selectedHeading = stepHeadings.find(item => item.id === stepId)?.label;
                  // setSidePanelHeading(selectedHeading);
                  setActiveIframeUrl?.(file.officeUrl);
                  setShowFileViewer?.(true);
                  setFileViewerContent?.("excel");
                  setIsRightPanelOpen(true)
                  setSelectedComponent({id:'1', type:'file'})
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
