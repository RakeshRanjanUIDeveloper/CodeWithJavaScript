import React, { useState, useRef, useEffect } from 'react'
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import './FileUpload.css'
import Shimmer from '../Shimmer/Shimmer';
const FileUpload = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [activeIframeUrl, setActiveIframeUrl] = useState('');
    const [uploading, setUploading] = useState(false);
    const [showResizableLayout, setShowResizableLayout] = useState(false);

    const [leftWidth, setLeftWidth] = useState(70);
    const containerRef = useRef(null);
    const isDragging = useRef(null);
    const handleMouseDown = () => {
        isDragging.current = true
    }
    const handleMouseMove = (e) => {
        if (!isDragging.current || !containerRef.current) return;
        const containerWidth = containerRef.current.offsetWidth;
        const offsetLeft = containerRef.current.getBoundingClientRect().left;
        const mouseX = e.clientX - offsetLeft
        const newLeftWidth = (mouseX / containerWidth) * 100
        if (newLeftWidth >= 20 && newLeftWidth <= 80) {
            setLeftWidth(newLeftWidth)
        }
    }
    const handleMouseUp = () => {
        isDragging.current = false;
    }
    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseup', handleMouseUp)
        return () => {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp)
        }
    }, [])

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        setUploading(true);
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'unsigned_excel_upload');
        try {
            const res = await fetch('https://api.cloudinary.com/v1_1/drb6o9edj/auto/upload', {
                method: 'POST',
                body: formData,
            });

            const data = await res.json();
            const publicUrl = data.secure_url;
            const officeUrl = `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(publicUrl)}`;

            const newFile = {
                fileName: file.name,
                officeUrl,
            };
            setUploadedFiles((prev) => [...prev, newFile]);
        } catch (error) {
            alert('Upload failed');
            console.error(error);
        } finally {
            setUploading(false);
        }
    };





    return (
        <React.Fragment>
            <div className="agent-flex-wrapper">
                <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
                <div className="help-content">
                    <p>I see you have selected the option to share the ‘Extracts containing metadata from source’. Please click on ‘Upload’ to upload metadata extracts to proceed.</p>
                    <div className="selected-options-wrapper">
                        <button className="options-btn proceed-btn">Proceed</button>
                        <label className="options-btn upload-click" onChange={handleUpload}>Upload
                            <input type="file" />
                        </label>
                    </div>

                </div>

            </div>
            {
                uploading && (
                    <React.Fragment>
                        <div className="agent-flex-wrapper">
                            <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
                            <div className="help-content">
                                <p>Uploading the metadata extracts</p>
                            </div>
                        </div>
                        <Shimmer />
                    </React.Fragment>

                )

            }

            <div className='upload-file-screen' ref={containerRef}>
                <div className='upload-file-icon' style={{ width: `${leftWidth}%` }} >
                    {
                        uploadedFiles.length > 0 && (
                            <div className="agent-flex-wrapper">
                                <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
                                <div className="help-content">
                                    <p>Thank you for uploading metadata. To view  the metadata extracted click on file icon</p>
                                    <div className='selected-file'>
                                        {uploadedFiles.map((file, index) => (
                                            <div key={index} onClick={() => {
                                                setActiveIframeUrl(file.officeUrl);
                                                setShowResizableLayout(true)
                                            }}>
                                                {file.fileName}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        )
                    }
                </div>
                {
                    showResizableLayout && (
                        <React.Fragment>
                        <div className='divider' onMouseDown={handleMouseDown}>← →</div>
                        <div className='upload-file-frame' style={{ width: `${100 - leftWidth}%` }}>
                            {activeIframeUrl && (
                                <iframe
                                    title="Excel Viewer"
                                    src={activeIframeUrl}
                                    width="100%"
                                    height="600px"
                                    frameBorder="0"
                                />
                            )}
                        </div>
                        </React.Fragment>

                    )
                }

            </div>


        </React.Fragment>
    )
}

export default FileUpload