// context/MainFrameProvider.js
import React, { useState } from "react";
import MainFrameContext from "../context/MainFrameContext";

const MainFrameProvider = ({ children }) => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);
  const [uploadeadFile, setUploadeadFile] = useState(null);
  const [hierarchy, setHierarchy] = useState(null);
  const [hierarchySteps, setHierarchySteps] = useState({});
  const [showDropdownComponent, setShowDropdownComponent] = useState(false);
  const [lastStepDevelopment, setLastStepDevelopment] = useState(false);
  const [lastStepIntegration, setLastStepIntegration] = useState(false);
  const [lastStepProcess, setLastStepProcess] = useState(false);
  const [dropDownSelectedAssessment, setDropDownSelectedAssessment] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const [openedAssessments, setOpenedAssessments] = useState([]);

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
        showDropdownComponent,
        setShowDropdownComponent,
        lastStepDevelopment,
        setLastStepDevelopment,
        lastStepIntegration,
        setLastStepIntegration,
        lastStepProcess,
        setLastStepProcess,
        dropDownSelectedAssessment, 
        setDropDownSelectedAssessment,
        dropdownOpen, 
        setDropdownOpen,
        openedAssessments, 
        setOpenedAssessments
      }}
    >
      {children}
    </MainFrameContext.Provider>
  );
};

export default MainFrameProvider;
