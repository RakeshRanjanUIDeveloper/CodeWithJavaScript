import React, { useContext } from "react";
import CrossIcon from "../../assets/icons/clear-icon.svg";
import MainFrameContext from "../context/MainFrameContext";

const ObservationData = () => {
  const {setHierarchyStep, incrementHierarchyStep, hierarchy, setIsRightPanelOpen} = useContext(MainFrameContext); 
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
        <h3>Observation</h3>
      </div>
    </React.Fragment>
  );
};

export default ObservationData;
