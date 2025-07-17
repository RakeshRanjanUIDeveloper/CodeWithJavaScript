import React, { useRef, useState, useEffect } from "react";
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import ConfirmIcon from "../../assets/icons/confirm-icon.png";
import './ResizableLayout.css';

const ResizableLayout = ({
  uploadedFiles,
  activeIframeUrl,
  setActiveIframeUrl,
  showResizableLayout,
  setShowResizableLayout,
  onConfirm,
  rightContent
}) => {
  const [leftWidth, setLeftWidth] = useState(70);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    const offsetLeft = containerRef.current.getBoundingClientRect().left;
    const mouseX = e.clientX - offsetLeft;
    const newLeftWidth = (mouseX / containerWidth) * 100;
    if (newLeftWidth >= 20 && newLeftWidth <= 80) {
      setLeftWidth(newLeftWidth);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <div className="upload-file-screen" ref={containerRef}>
      <div className="upload-file-icon" style={{ width: `${leftWidth}%` }}>
        {uploadedFiles.length > 0 && (
          <div className="agent-flex-wrapper">
            <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
            <div className="help-content">
              <p>
                Thank you for uploading metadata. To view the metadata extracted click on file icon
              </p>
              <div className="selected-file">
                {uploadedFiles.map((file, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setActiveIframeUrl(file.officeUrl);
                      setShowResizableLayout(true);
                      setTimeout(() => {
                        containerRef.current?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }, 100);
                    }}
                  >
                    {file.fileName}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {showResizableLayout && (
        <React.Fragment>
          <div className="divider" onMouseDown={handleMouseDown}>
            <span>← →</span>
          </div>
          <div className="upload-file-frame" style={{ width: `${100 - leftWidth}%` }}>
            <div className="output-header">
              <h6>Extracts containing Metadata</h6>
              <button className='confirm-btn' onClick={onConfirm}>
                <img src={ConfirmIcon} className='confirm-tick-img' />
                Confirm
              </button>
            </div>
            {activeIframeUrl && (
              <iframe className="file-iframe" title="Excel Viewer" src={activeIframeUrl} />
            )}
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ResizableLayout;
 