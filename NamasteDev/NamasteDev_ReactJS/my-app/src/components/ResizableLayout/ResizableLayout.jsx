const ResizableLayout = ({
  activeIframeUrl,
  customLeftContent,
  customContent,
  showObservationPanel,
  onConfirmObservation,
  onConfirmExcel,
  observationPanelContent
}) => {
  return (
    <div className="resizable-layout">
      <div className="left-panel">
        {customLeftContent}
      </div>
      <div className="main-panel">
        {activeIframeUrl && (
          <>
            <div className="confirm-bar">
            <button onClick={onConfirmExcel} className="confirm-btn">Confirm</button>
          </div>
            <iframe src={activeIframeUrl} title="Office Viewer" width="100%" height="100%" frameBorder="0" />
          </>
          
        )}
        {customContent}
         {showObservationPanel && observationPanelContent}
      </div>
    </div>
  );
};

export default ResizableLayout;
