import React, { useState } from "react";
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import "./FileUpload.css";
import Shimmer from "../Shimmer/Shimmer";
import ResizableLayout from "../ResizableLayout/ResizableLayout";


const FileUpload = ({ uploading, setUploading, setIsConfirmed }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [activeIframeUrl, setActiveIframeUrl] = useState("");
  const [showResizableLayout, setShowResizableLayout] = useState(false);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "unsigned_excel_upload");

    try {
      const res = await fetch("https://api.cloudinary.com/v1_1/drb6o9edj/auto/upload", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      const publicUrl = data.secure_url;
      const officeUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(publicUrl)}`;
      const newFile = { fileName: file.name, officeUrl };
      setUploadedFiles((prev) => [...prev, newFile]);
    } catch (error) {
      alert("Upload failed");
      console.error(error);
    } finally {
      setUploading(false);
    }
  };

  const handleConfirm = () =>{
    setIsConfirmed(true);
  }
  return (
    <React.Fragment>
      <div className="agent-flex-wrapper">
        <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
        <div className="help-content">
          <p>
            I see you have selected the option to share the ‘Extracts containing
            metadata from source’. Please click on ‘Upload’ to upload metadata
            extracts to proceed.
          </p>
          <div className="selected-options-wrapper">
            <button className="options-btn proceed-btn">Proceed</button>
            <label className="options-btn upload-click">
              Upload
              <input type="file" onChange={handleUpload} />
            </label>
          </div>
        </div>
      </div>

      {uploading && (
        <React.Fragment>
          <div className="agent-flex-wrapper">
            <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
            <div className="help-content">
              <p>Uploading the metadata extracts</p>
            </div>
          </div>
          <Shimmer />
        </React.Fragment>
      )}

      <ResizableLayout 
        uploadedFiles={uploadedFiles}
        activeIframeUrl={activeIframeUrl}
        setActiveIframeUrl={setActiveIframeUrl}
        showResizableLayout={showResizableLayout}
        setShowResizableLayout={setShowResizableLayout}
        onConfirm={handleConfirm}
         />

    </React.Fragment>
  );
};

export default FileUpload;
