import React, {useContext} from 'react';
import CrossIcon from "../../../assets/icons/clear-icon.svg"
import MainFrameContext from '../../context/MainFrameContext';
const ResizableLayout = ({
  activeIframeUrl,
  customLeftContent,
  customContent,
  showObservationPanel,
  onConfirmExcel,
  observationPanelContent,
  sidePanelHeading
}) => {
  const {setHierarchyStep, incrementHierarchyStep, hierarchy, setIsRightPanelOpen} = useContext(MainFrameContext); 

  return (
    <div className="resizable-layout">
      <div className="main-panel">
        {activeIframeUrl && (
          <React.Fragment>
            <img src={CrossIcon} className="cross-icon" alt="" onClick={() => {
              setIsRightPanelOpen(false);
              incrementHierarchyStep(hierarchy);
            } } />
            <div className="extracts-wrapper">
              <h3>{sidePanelHeading}</h3>
              {/* <button  className="confirm-btn">Confirm</button> */}
            </div>
            <iframe src={activeIframeUrl} title="Office Viewer" width="100%" height="100%" frameBorder="0" />
          </React.Fragment>
          
        )}
          {customContent}
         {showObservationPanel && observationPanelContent}
      </div>
    </div>
  );
};

export default ResizableLayout;
