// context/MainFrameProvider.js
import React, { useState } from "react";
import MainFrameContext from "../context/MainFrameContext";

const MainFrameProvider = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);
  const [uploadeadFile, setUploadeadFile] = useState(null);
  const [hierarchy, setHierarchy] = useState(null);
  const [hierarchySteps, setHierarchySteps] = useState({});
  const [assessmentCompleted, setAssessmentCompleted] = useState(false);
  const [nextAssessmentComponent, setNextAssessmentComponent] = useState(null);
  const [showDropdownComponent, setShowDropdownComponent] = useState(false);
const updateHierarchyStep = (hierarchy, step) => {
  setHierarchySteps((prev) => {
    if (prev[hierarchy] === step) return prev;
    return { ...prev, [hierarchy]: step };
  });
};

  const incrementHierarchyStep = (hierarchy) => {
    setHierarchySteps((prev) => ({
      ...prev,
      [hierarchy]: (prev[hierarchy] || 1) + 1, 
    }));
  };
  return (
    <MainFrameContext.Provider
      value={{
        selectedComponent,
        setSelectedComponent,
        isRightPanelOpen,
        setIsRightPanelOpen,
        uploadeadFile,
        setUploadeadFile,
        hierarchy,
        setHierarchy,
        hierarchySteps,
        setHierarchySteps,
        updateHierarchyStep,
        incrementHierarchyStep,
        assessmentCompleted, 
        setAssessmentCompleted,
        showDropdownComponent,
        setShowDropdownComponent,
        nextAssessmentComponent,
        setNextAssessmentComponent
      }}
    >
      {children}
    </MainFrameContext.Provider>
  );
};

export default MainFrameProvider;
