import React, { useState, useEffect, useRef, useContext } from 'react'
import AssessmentInput from '../common/AssessmentInput/AssessmentInput';
import Questionnaire from '../Questionnaire/Questionnaire';
import FileUploads from '../common/FileUpload/FileUploads';
import ResizableLayout from '../common/ResizableLayout/ResizableLayout';
import ObservationData from '../ObservationData/ObservationData';
import GraphTabs from '../Graphs/GraphTabs';
import { UploadedFiles } from "../../data/UploadedFiles";
import useShimmer from '../common/Shimmer/useShimmer';
import RICEFWBarChart from '../../components/Graphs/RICEFWBarChart';
import ReportSubcategoryChart from '../../components/Graphs/ReportSubcategoryChart';
import RecommendationChart from '../../components/Graphs/RecommendationChart';
import ExtensibilityChart from '../../components/Graphs/ExtensibilityChart';
import CrossIcon from "../../assets/icons/clear-icon.svg"
import ScreenMode from "../common/ScreenMode/ScreenMode";
import MainFrameContext from '../context/MainFrameContext';
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import FileIcon from "../../assets/icons/file-icon.svg";
import Shimmer from '../common/Shimmer/Shimmer';
import { systemAssessmentInputs } from '../../data/systemAssessmentInputs';
import { fileUploadData } from '../../data/fileUploadData';
import { shimmerHeaders } from "../../data/ShimmerHeaders";
import AssessmentDropDownList from '../common/AssessmentDropdownList/AssessmentDropDownList';
import CompletedAssessment from '../common/CompletedAssessment/CompletedAssessment';

const DevelopmentAssessment = () => {
  const [showAssessmentInput, setShowAssessmentInput] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [showProductionLog, setShowProductionLog] = useState(false);
  const [metadataConfirmed, setMetadataConfirmed] = useState(false); // new
  const [productionLogConfirmed, setProductionLogConfirmed] = useState(false); // new
  const [observationConfirmed, setObservationConfirmed] = useState(false); //ProductionLogs proceed click state
  const [isQuestionnaireConfirmed, setQuestionnaireConfirmed] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [showSummaryReport, setShowSummaryReport] = useState(false);
  const [summaryReportConfirmed, setSummaryReportConfirmed] = useState(false);
  const [sidePanelHeading, setSidePanelHeading] = useState('');
  const [activeIframeUrl, setActiveIframeUrl] = useState(null);
  const showGraphShimmer = useShimmer(summaryReportConfirmed, 5000);
  const observationShimmer = useShimmer(observationConfirmed, 5000);
  const { hierarchySteps, setIsRightPanelOpen, hierarchyStep, hierarchy, setSelectedComponent, showDropdownComponent, lastStepDevelopment} = useContext(MainFrameContext);
  const observationData = UploadedFiles.find((file) => file.id === "3");

  if (!observationData) return null;
  useEffect(() => {
    setShowAssessmentInput(true)
  }, [])

  useEffect(() => {
    if (hierarchySteps["Development Assessment"] === 2) {
      setMetadataConfirmed(true);
      setShowQuestionnaire(true);
    } else if (hierarchySteps["Development Assessment"] === 3) {
      setQuestionnaireConfirmed(true);
    } else if (hierarchySteps["Development Assessment"] === 4) {
      setShowProductionLog(true);
    } else if (hierarchySteps["Development Assessment"] === 5) {
      setProductionLogConfirmed(true)
    } else if (hierarchySteps["Development Assessment"] === 6) {
      setShowSummaryReport(true);
    }
    setIsRightPanelOpen(false);
  }, [hierarchySteps, hierarchyStep, hierarchy]);

  const handleMetaDataUpload = () => {
    setShowFileUpload(true);
  }
  const handleQuestionnaire = () => {
    setShowQuestionnaire(true);
    setIsRightPanelOpen(true);
    setSelectedComponent({ id: '2', type: 'questionnaire' });
  };
  const handleProductionLogs = () => {
    setShowProductionLog(true)
  }
  const handleObservation = () => {
    setIsRightPanelOpen(true);
    setSelectedComponent({ id: '5', type: 'observation' });
  }
  const handleGraphTabClick = (tabId) => {
    setSelectedComponent({ id: tabId, type: 'chart' });
    setIsRightPanelOpen(true);
  };
  return (
    <React.Fragment>
      {showAssessmentInput && (
        <AssessmentInput
          dataList={systemAssessmentInputs.DevelopmentAssessmentInputs}
          assessmentId={1}
          functionMap={{
            onExtract: handleMetaDataUpload,
          }}
          pointerOption={[1]}
          disabledOption={[2, 3]}
        />
      )}
      {showFileUpload && (
        <FileUploads
          fileUploadDataList={fileUploadData.developmentFileUploadData}
          shimmerHeadersList={shimmerHeaders.developmentShimmerHeaders}
          stepId={1}
          setActiveIframeUrl={setActiveIframeUrl}
          setSidePanelHeading={setSidePanelHeading}
          hierarchy="Development Assessment"
          hierarchyStep={1}
        />
      )}
      {metadataConfirmed && (
        <AssessmentInput
          dataList={systemAssessmentInputs.DevelopmentAssessmentInputs}
          assessmentId={2}
          functionMap={{
            onQuestionnaire: handleQuestionnaire
          }}
          disabledOption={[1, 3]}
          fadedOption={[1]}
          pointerOption={[2, 3]}
          hierarchy="Development Assessment"
          hierarchyStep={2}
        />
      )}
      {isQuestionnaireConfirmed && (
        <AssessmentInput
          dataList={systemAssessmentInputs.DevelopmentAssessmentInputs}
          assessmentId={3}
          disabledOption={[1, 2]}
          functionMap={{
            onProductionLogs: handleProductionLogs
          }}
          fadedOption={[1, 2]}
          pointerOption={[3]}
          hierarchy="Development Assessment"
          hierarchyStep={3}
        />
      )}
      {isQuestionnaireConfirmed && showProductionLog && (
        <FileUploads
          fileUploadDataList={fileUploadData.developmentFileUploadData}
          shimmerHeadersList={shimmerHeaders.developmentShimmerHeaders}
          stepId={2}
          setActiveIframeUrl={setActiveIframeUrl}
          setSidePanelHeading={setSidePanelHeading}
          hierarchy="Development Assessment"
          hierarchyStep={4}
        />
      )}

      {metadataConfirmed &&
        isQuestionnaireConfirmed &&
        productionLogConfirmed && (
          <FileUploads
            fileUploadDataList={fileUploadData.developmentFileUploadData}
            shimmerHeadersList={shimmerHeaders.developmentShimmerHeaders}
            stepId={3}
            onProceed={() => setObservationConfirmed(true)}
            setActiveIframeUrl={setActiveIframeUrl}
            setSidePanelHeading={setSidePanelHeading}
            hierarchy="Development Assessment"
            hierarchyStep={5}
          />
        )}

      {observationShimmer && (
        <div style={{ paddingLeft: "3.5vw" }}>
          <Shimmer headerText="Generating the observation…" />
        </div>
      )}
      {observationConfirmed && !observationShimmer && (
        <div className="agent-flex-wrapper">
          <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
          <div className="help-content">
            <p className="upload-success-msg">{observationData.label}</p>
            <div
              className="file-icon-wrapper"
              onClick={handleObservation}
              style={{ cursor: "pointer" }}
            >
              <img src={FileIcon} className="devobjicon" alt="file icon" />
              <span>View Observations</span>
            </div>
          </div>
        </div>
      )}
      {showSummaryReport && (
        <FileUploads
          fileUploadDataList={fileUploadData.developmentFileUploadData}
          shimmerHeadersList={shimmerHeaders.developmentShimmerHeaders}
          stepId={4}
          onProceed={() => setSummaryReportConfirmed(true)}
          setSidePanelHeading={setSidePanelHeading}
          hierarchy="Development Assessment"
          hierarchyStep={6}
        />
      )}
      {summaryReportConfirmed && (
        <div className="agent-flex-wrapper">
          <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
          <div>
            <p className="upload-msg">
              {UploadedFiles.find((item) => item.id === "4")?.label}
            </p>

            {showGraphShimmer ? (
              <Shimmer headerText="Generating the summary report…" />
            ) : (
              <GraphTabs onTabClick={handleGraphTabClick} />
            )}
          </div>
        </div>
      )}
      {lastStepDevelopment && <CompletedAssessment />}
      {lastStepDevelopment && showDropdownComponent && <AssessmentDropDownList />}
    </React.Fragment>
  );
}

export default DevelopmentAssessment
