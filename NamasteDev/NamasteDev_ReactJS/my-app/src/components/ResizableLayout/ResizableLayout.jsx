import React, { useEffect, useRef, useState } from "react";
import "./ResizableLayout.css";
const ResizableLayout = ({activeIframeUrl}) => {
  const [leftWidth, setLeftWidth] = useState(70);
  const containerRef = useRef(null);
  const isDragging = useRef(null);

  const handleMouseDown = () => {
    isDragging.current = true;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !containerRef.current) return;
    const containerWidth = containerRef.current.offsetWidth;
    console.log(containerWidth); // 1082px
    const offsetLeft = containerRef.current.getBoundingClientRect().left;
    console.log(offsetLeft); //0
    const mouseX = e.clientX - offsetLeft;
    console.log(mouseX);
    const newLeftWidth = (mouseX / containerWidth) * 100;
    console.log(newLeftWidth);
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
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    };
  }, []);
  return (
    <React.Fragment>
      <div className="draggable-container" ref={containerRef}>
        <div className="panel left-panel" style={{ width: `${leftWidth}%` }}>
          Left Panel - ({Math.round(leftWidth)}%)
        </div>
        <div className="divider" onMouseDown={handleMouseDown}>
          ← →
        </div>
        <div
          className="panel right-panel"
          style={{ width: `${100 - leftWidth}%` }}
        >
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
      </div>
    </React.Fragment>
  );
};

export default ResizableLayout;
