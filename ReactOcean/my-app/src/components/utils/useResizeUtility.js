import { useEffect } from 'react';

const useResizeUtility = ({ outerWrapperRef, animationFrameId, isDragging, setLeftWidth }) => {
  const handleMouseDown = (e) => {
    e.preventDefault();
    isDragging.current = true;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
      animationFrameId.current = null;
    }
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !outerWrapperRef.current) return;

    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current);
    }

    animationFrameId.current = requestAnimationFrame(() => {
      const container = outerWrapperRef.current;
      const containerWidth = container.offsetWidth;
      const offsetLeft = container.getBoundingClientRect().left;
      const mouseX = e.clientX - offsetLeft;
      const newLeftWidth = (mouseX / containerWidth) * 100;

      if (newLeftWidth >= 20 && newLeftWidth <= 80) {
        setLeftWidth(newLeftWidth);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);
  
  return { handleMouseDown };
};

export default useResizeUtility;
