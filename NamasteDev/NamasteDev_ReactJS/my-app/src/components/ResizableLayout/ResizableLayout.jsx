import React, { useEffect, useRef, useState } from "react";
import "./ResizableLayout.css";

const ResizableLayout = ({ activeIframeUrl, uploadedFiles = [], onFileClick, customContent }) => {
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
    <div className="draggable-container" ref={containerRef}>
      <div className="panel left-panel" style={{ width: `${leftWidth}%` }}>
        {/* Left Panel - ({Math.round(leftWidth)}%) */}
      </div>
      {/* <div className="divider" >⟷</div> */}
      <div class="divider" onMouseDown={handleMouseDown}>
        <div class="divider-handle">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 13" fill="none">
            <path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M0.166238 6.05384L5.70186 0.224031C5.92272 -0.012177 6.27985 -0.012177 6.50071 0.224031L6.83435 0.580855C7.05522 0.817063 7.05522 1.19902 6.83435 1.43522L2.02711 6.48102L6.82965 11.5268C7.05052 11.763 7.05052 12.145 6.82965 12.3812L6.49601 12.738C6.27515 12.9742 5.91802 12.9742 5.69716 12.738L0.161538 6.90821C-0.0546229 6.672 -0.0546229 6.29004 0.166238 6.05384Z" fill="black" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 14" fill="none">
            <path id="Icon" fill-rule="evenodd" clip-rule="evenodd" d="M6.83376 7.39148L1.29814 13.2213C1.07728 13.4575 0.720147 13.4575 0.499286 13.2213L0.165646 12.8645C-0.0552151 12.6282 -0.0552151 12.2463 0.165646 12.0101L4.97289 6.96429L0.170346 1.91849C-0.0505146 1.68228 -0.0505146 1.30033 0.170346 1.06412L0.503987 0.7073C0.724848 0.471092 1.08198 0.471092 1.30285 0.7073L6.83846 6.53711C7.05462 6.77332 7.05462 7.15527 6.83376 7.39148Z" fill="black" />
          </svg>
        </div>
      </div>

      {/* <div className="panel right-panel" style={{ width: `${100 - leftWidth}%` }}>
        {customContent ? (
          <div className="custom-scrollable-panel">{customContent}</div>
        ) : activeIframeUrl ? (
          <iframe
            title="Excel Viewer"
            src={activeIframeUrl}
            width="100%"
            height="600px"
            frameBorder="0"
          />
        ) : null}
      </div> */}
      <div className="panel right-panel" style={{ width: `${100 - leftWidth}%` }}>
        <div className="custom-scrollable-panel">
          {customContent}
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

    </div>
  );

  // return (
  //   <React.Fragment>
  //     <div className="draggable-container" ref={containerRef}>
  //       <div className="panel left-panel" style={{ width: `${leftWidth}%` }}>
  //         Left Panel - ({Math.round(leftWidth)}%)
  //       </div>
  //       <div className="divider" onMouseDown={handleMouseDown}>
  //         ← →
  //       </div>
  //       <div
  //         className="panel right-panel"
  //         style={{ width: `${100 - leftWidth}%` }}
  //       >
  //         {activeIframeUrl && (
  //           <iframe
  //             title="Excel Viewer"
  //             src={activeIframeUrl}
  //             width="100%"
  //             height="600px"
  //             frameBorder="0"
  //           />
  //         )}
  //       </div>
  //     </div>
  //   </React.Fragment>
  // );
};

export default ResizableLayout;
