import React, { useContext } from "react";
import CrossIcon from "../../assets/icons/clear-icon.svg";
import MainFrameContext from "../context/MainFrameContext";

const ProcessObservationData = () => {
  const {incrementHierarchyStep, hierarchy, setIsRightPanelOpen} = useContext(MainFrameContext); 
  return (
    <React.Fragment>
      <img
        src={CrossIcon}
        className="cross-icon"
        alt=""
        onClick={() => {
          setIsRightPanelOpen(false);
          incrementHierarchyStep(hierarchy);
        }}
      />
      <div className="extracts-wrapper">
        <h3>Observations</h3>
      </div>
    </React.Fragment>
  );
};

export default ProcessObservationData;

 