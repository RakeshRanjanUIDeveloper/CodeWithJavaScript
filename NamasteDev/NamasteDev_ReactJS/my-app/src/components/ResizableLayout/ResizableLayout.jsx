import React from 'react';
const ResizableLayout = ({
  activeIframeUrl,
  customLeftContent,
  customContent,
  showObservationPanel,
  onConfirmExcel,
  observationPanelContent,
  sidePanelHeading
}) => {
  return (
    <div className="resizable-layout">
      {/* <div className="left-panel">
        {customLeftContent}
      </div> */}
      <div className="main-panel">
        {activeIframeUrl && (
          <React.Fragment>
            <div className="extracts-wrapper">
              <h3>{sidePanelHeading}</h3>
              <button onClick={onConfirmExcel} className="confirm-btn">Confirm</button>
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
