import React, { useState, useRef } from 'react';
import './ResizableLayout.css';

const ResizableLayout = () => {
  const containerRef = useRef(null);
  const [leftWidth, setLeftWidth] = useState(70); 
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

  React.useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <div className="draggable-container" ref={containerRef}>
      <div className="pane left" style={{ width: `${leftWidth}%` }}>
        Left Pane ({Math.round(leftWidth)}%)
      </div>

      <div className="divider" onMouseDown={handleMouseDown}>
        <span>← →</span>
      </div>

      <div className="pane right" style={{ width: `${100 - leftWidth}%` }}>
        Right Pane ({Math.round(100 - leftWidth)}%)
      </div>
    </div>
  );
};

export default ResizableLayout;
