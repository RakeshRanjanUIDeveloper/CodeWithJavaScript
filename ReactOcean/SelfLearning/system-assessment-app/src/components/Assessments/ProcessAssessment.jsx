import React, { useState, useEffect, useContext } from 'react'
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import useShimmer from '../common/Shimmer/useShimmer';
import MainFrameContext from '../context/MainFrameContext';
import AssessmentInput from '../common/AssessmentInput/AssessmentInput';
import { systemAssessmentInputs } from '../../data/systemAssessmentInputs';
import FileUploads from '../common/FileUpload/FileUploads';
import Shimmer from '../common/Shimmer/Shimmer';
import { fileUploadData } from '../../data/fileUploadData';
import { shimmerHeaders } from "../../data/ShimmerHeaders";
import FileIcon from "../../assets/icons/file-icon.svg";
import { UploadedFiles } from "../../data/UploadedFiles";
import ProcessGraphTabs from '../../components/Graphs/ProcessGraphs/ProcessGraphTabs';
import AssessmentDropDownList from '../common/AssessmentDropdownList/AssessmentDropDownList';
import CompletedAssessment from '../common/CompletedAssessment/CompletedAssessment';


const ProcessAssessment = () => {
  const [showProcessAssessment, setShowProcessAssessment] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const { hierarchySteps, setIsRightPanelOpen, hierarchyStep, hierarchy, setSelectedComponent, showDropdownComponent, lastStepProcess } = useContext(MainFrameContext);
  const [showProcessInputs, setShowProcessInputs] = useState(false);
  const [showFunctionalUpload, setShowFunctionalUpload] = useState(false);
  const [functionalConfirmed, setFunctionalConfirmed] = useState(false);
  const [showProductionUpload, setShowProductionUpload] = useState(false);
  const [productionConfirmed, setProductionConfirmed] = useState(false);
  const [showSAPUpload, setShowSAPUpload] = useState(false);
  const [sapConfirmed, setSAPConfirmed] = useState(false);
  const [activeIframeUrl, setActiveIframeUrl] = useState(null);
  const [processobservationConfirmed, processsetObservationConfirmed] = useState(false);
  const processobservationShimmer = useShimmer(processobservationConfirmed, 5000);
  const [showProcessSummaryReport, setShowProcessSummaryReport] = useState(false);
  const [processSummaryReportConfirmed, setProcessSummaryReportConfirmed] = useState(false);
  const showProcessGraphShimmer = useShimmer(processSummaryReportConfirmed, 5000);

  useEffect(() => {
    setShowProcessAssessment(true)
  }, [])

  useEffect(() => {
    const processStep = hierarchySteps["Process Assessment"];

    if (processStep === 1) {
      setProcessQuestionnaireConfirmed(true);
    } else if (processStep === 2) {
      setShowFileUpload(true);
      setShowProcessInputs(true);
    } else if (processStep === 3) {
      // functional upload
      setShowFunctionalUpload(true);
    } else if (processStep === 4) {
      setFunctionalConfirmed(true);
    } else if (processStep === 5) {
      // production upload
      setShowProductionUpload(true);
    } else if (processStep === 6) {
      setProductionConfirmed(true);
    } else if (processStep === 7) {
      setShowSAPUpload(true);
    } else if (processStep === 8) {
      setSAPConfirmed(true);
    }
    else if (processStep === 9) {
      setShowProcessSummaryReport(true);
    }

    setIsRightPanelOpen(false);
  }, [hierarchySteps, hierarchyStep, hierarchy]);


  const handleProcessQuestionnaire = () => {
    setIsRightPanelOpen(true);
    setSelectedComponent({ type: 'ProcessQuestionnaire' });
  };
  const handleFunctionalUpload = () => {
    setShowFunctionalUpload(true);
  }
  const handleProductionUpload = () => {
    setShowProductionUpload(true);
  }
  const handleSAPUpload = () => {
    setShowSAPUpload(true);
  }

  const handleProcessObservation = () => {
    setIsRightPanelOpen(true);
    setSelectedComponent({ type: 'ProcessObservationData' });
  }
  const handleGraphTabClick = (tabId) => {
    setSelectedComponent({ id: tabId, type: 'chart' });
    setIsRightPanelOpen(true);
  };
  return (
    <React.Fragment>
      {
        (showProcessAssessment &&
          <div className="agent-flex-wrapper">
            <img src={DevObjectsIcon} className="devobjicon" alt="assessment icon" />
            <div className="requirements-wrapper">
              <p>Please complete the Process Assessment Questionnaire to get started. Please click on ‘Fill Questionnaire’ to proceed.
              </p>
              <div
                className="file-icon-wrapper"
                onClick={handleProcessQuestionnaire}
              >
                <img src={FileIcon} className="devobjicon" alt="file icon" />
                <span>Fill Questionnaire
                </span>
              </div>
            </div>
          </div>
        )
      }
      {showProcessInputs && (
        <AssessmentInput
          dataList={systemAssessmentInputs.ProcessAssessmentInputs}
          assessmentId={1}
          functionMap={{ onFunctionalClick: handleFunctionalUpload }}
          pointerOption={[1]}
          disabledOption={[2, 3]}
          hierarchy="Process Assessment"
          hierarchyStep={2}
        />
      )}

      {showFunctionalUpload && (
        <FileUploads
          fileUploadDataList={fileUploadData.processFileUploadData}
          shimmerHeadersList={shimmerHeaders.processShimmerHeaders}
          stepId={1}
          setActiveIframeUrl={setActiveIframeUrl}
          // setSidePanelHeading={setSidePanelHeading}
          hierarchy="Process Assessment"
          hierarchyStep={3}
        />
      )}

      {functionalConfirmed && (
        <AssessmentInput
          dataList={systemAssessmentInputs.ProcessAssessmentInputs}
          assessmentId={2}
          functionMap={{ onProductionClick: handleProductionUpload }}
          pointerOption={[2, 3]}
          disabledOption={[1, 3]}
          fadedOption={[1]}
          hierarchy="Process Assessment"
          hierarchyStep={4}
        />
      )}

      {showProductionUpload && (
        <FileUploads
          fileUploadDataList={fileUploadData.processFileUploadData}
          shimmerHeadersList={shimmerHeaders.processShimmerHeaders}
          stepId={2}
          setActiveIframeUrl={setActiveIframeUrl}
          // setSidePanelHeading={setSidePanelHeading}
          hierarchy="Process Assessment"
          hierarchyStep={5}
        />
      )}

      {productionConfirmed && (
        <AssessmentInput
          dataList={systemAssessmentInputs.ProcessAssessmentInputs}
          assessmentId={3}
          functionMap={{ onSAPClick: handleSAPUpload }}
          pointerOption={[3]}
          disabledOption={[1, 2]}
          fadedOption={[1, 2]}
          hierarchy="Process Assessment"
          hierarchyStep={6}
        />
      )}

      {showSAPUpload && (
        <FileUploads
          fileUploadDataList={fileUploadData.processFileUploadData}
          shimmerHeadersList={shimmerHeaders.processShimmerHeaders}
          stepId={3}
          setActiveIframeUrl={setActiveIframeUrl}
          // setSidePanelHeading={setSidePanelHeading}
          hierarchy="Process Assessment"
          hierarchyStep={7}
        />
      )}
      {functionalConfirmed && productionConfirmed && sapConfirmed &&
        <FileUploads
          fileUploadDataList={fileUploadData.processFileUploadData}
          shimmerHeadersList={shimmerHeaders.processFileUploadData}
          stepId={4}
          onProceed={() => processsetObservationConfirmed(true)}
          setActiveIframeUrl={setActiveIframeUrl}
          // setSidePanelHeading={setSidePanelHeading}
          hierarchy="Process Assessment"
          hierarchyStep={8}
        />
      }
      {processobservationShimmer && (
        <div style={{ paddingLeft: "3.5vw" }}>
          <Shimmer headerText="Generating the observations…" />
        </div>
      )}
      {processobservationConfirmed && !processobservationShimmer &&
        <div className="agent-flex-wrapper">
          <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
          <div className="help-content">
            <p className="upload-success-msg">
              {/* {ProcessobservationData.label} */}
              I have analyzed your data and here are my observations.
            </p>
            <div
              className="file-icon-wrapper"
              onClick={handleProcessObservation}
            >
              <img src={FileIcon} className="devobjicon" alt="file icon" />
              <span>View Observations</span>
            </div>
          </div>
        </div>
      }
      {showProcessSummaryReport &&
        <FileUploads
          fileUploadDataList={fileUploadData.processFileUploadData}
          shimmerHeadersList={shimmerHeaders.processFileUploadData}
          stepId={5}
          onProceed={() => setProcessSummaryReportConfirmed(true)}
          // setSidePanelHeading={setSidePanelHeading}
          hierarchy="Development Assessment"
          hierarchyStep={9}
        />
      }
      {processSummaryReportConfirmed && (
        <>
          <div className="agent-flex-wrapper">
            <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
            <div>
              <p className="upload-msg">
                Summarizing your report for your current S/4HANA Functional Impact (Simplification) Analysis.
              </p>
            </div>
          </div>
          {showProcessGraphShimmer ? (
            <div style={{ paddingLeft: '3.5vw' }}>
              <Shimmer headerText="Generating the Analysis..." />
            </div>
          ) : (
            <ProcessGraphTabs onTabClick={handleGraphTabClick} />
          )}</>
      )}
      {lastStepProcess && <CompletedAssessment />}
      {lastStepProcess && showDropdownComponent && <AssessmentDropDownList />}

    </React.Fragment>
  )
}
export default ProcessAssessment;
