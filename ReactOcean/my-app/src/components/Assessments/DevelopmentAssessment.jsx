import React, { useState, useEffect, useRef } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import '../SystemAssessment/SystemAssessment.css'
import SapAgentDropdown from '../SapAgentDropdown/SapAgentDropdown';
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import BackArrow from "../../assets/icons/back-arrow.svg";
import HeaderIcon from '../../assets/icons/agent-main-icon.svg';
import ClearIcon from "../../assets/icons/clear-icon.svg";
import Shimmer from '../Shimmer/Shimmer';
import AssessmentInput from '../AssessmentInput/AssessmentInput';
import Questionnaire from '../Questionnaire/Questionnaire';
import FileUploads from '../FileUpload/FileUploads';
import ResizableLayout from '../ResizableLayout/ResizableLayout';
import ObservationData from '../ObservationData/ObservationData';
import GraphTabs from '../Graphs/GraphTabs';
import { UploadedFiles } from "../../data/UploadedFiles";
import useShimmer from '../utils/useShimmer';
import useResizeUtility from '../utils/useResizeUtility';
import RICEFWBarChart from '../../components/Graphs/RICEFWBarChart';
import ReportSubcategoryChart from '../../components/Graphs/ReportSubcategoryChart';
import RecommendationChart from '../../components/Graphs/RecommendationChart';
import ExtensibilityChart from '../../components/Graphs/ExtensibilityChart';
import CrossIcon from "../../assets/icons/clear-icon.svg"
import ScreenMode from "../ScreenMode/ScreenMode";
import { use } from 'react';

const DevelopmentAssessment = () => {
  const [showAssessmentInput, setShowAssessmentInput] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [showProductionLog, setShowProductionLog] = useState(false);
  const [metadataConfirmed, setMetadataConfirmed] = useState(false); // new
  const [productionLogConfirmed, setProductionLogConfirmed] = useState(false); // new
  const [observationConfirmed, setObservationConfirmed] = useState(false); //ProductionLogs proceed click state
  const [showObservationContent, setShowObservationContent] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isQuestionnaireConfirmed, setQuestionnaireConfirmed] = useState(false);
  const [showQuestionnaire, setShowQuestionnaire] = useState(false);
  const [questionnairePanelOpen, setQuestionnairePanelOpen] = useState(false);
  const [activeSidePanelContent, setActiveSidePanelContent] = useState(null);
  const [showObservationPanel, setShowObservationPanel] = useState(false);
  const [showSummaryReport, setShowSummaryReport] = useState(false);
  const [summaryReportConfirmed, setSummaryReportConfirmed] = useState(false);
  // const [observationShimmer, setObservationShimmer] = useState(false);
  const [selectedChartId, setSelectedChartId] = useState(null);
  const [sidePanelHeading, setSidePanelHeading] = useState('');
  const [showFileViewer, setShowFileViewer] = useState(false);
  const [fileViewerContent, setFileViewerContent] = useState(null);
  const [activeIframeUrl, setActiveIframeUrl] = useState(null);
  const [currentStepId, setCurrentStepId] = useState(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const showGraphShimmer = useShimmer(summaryReportConfirmed, 5000);
  const observationShimmer = useShimmer(observationConfirmed && currentStepId === 3, 5000);

  const animationFrameId = useRef(null);
  const outerWrapperRef = useRef(null);
  const [leftWidth, setLeftWidth] = useState(100);
  const isDragging = useRef(false);

  const { handleMouseDown } = useResizeUtility({
    outerWrapperRef,
    animationFrameId,
    isDragging,
    setLeftWidth
  });

const getChartComponent = (id) => {
  switch (id) {
    case 'summary':
      return <RICEFWBarChart activeTab={id} />;
    case 'system':
      return <ReportSubcategoryChart activeTab={id} />;
    case 'deepdive':
      return <RecommendationChart activeTab={id} />;
    case 'solutions':
      return <ExtensibilityChart activeTab={id} />;
    default:
      return null;
  }
};

  const resetAssessment = () => {
    setSelectedClient('');
    setAgentClick('');
    setContact(false);
    setSelectedApproach('');
    setShowAssessmentInput(false);
    setShowFileUpload(false);
    setIsConfirmed(false);
    setInitialLoading(true);
    setQuestionnaireConfirmed(false)
    setShowQuestionnaire(false);
    setShowProductionLog(false);
    setMetadataConfirmed(false);
    setProductionLogConfirmed(false);
    setObservationConfirmed(false);
    setShowObservationContent(false);
    setShowObservationPanel(false);
    setShowSummaryReport(false);
    setSummaryReportConfirmed(false);
    setActiveSidePanelContent(null);
    setQuestionnairePanelOpen(false);
    setShowFileViewer(false);
    /* setLeftWidth(90) */
  }


  useEffect(() => {
    if (productionLogConfirmed) {
      setCurrentStepId(3);
    }

  }, [productionLogConfirmed]);

    useEffect(() =>{
      setShowAssessmentInput(true);
    },[])

  const handleMetaDataUpload = () => {
    setShowFileUpload(true);
    setCurrentStepId(1);
  }
  const handleQuestionnaire = () => {
    setShowQuestionnaire(true);
    setQuestionnairePanelOpen(true);
    setActiveSidePanelContent('questionnaire');
    setFileViewerContent('questionnaire');
    setShowFileViewer(true);
  };
  const handleQuestionnaireConfirm = () => {
    setQuestionnaireConfirmed(true);
    setShowFileViewer(false);
  }
  const handleProductionLogs = () => {
    setShowProductionLog(true)
    setCurrentStepId(2);
  }
  const handleViewObservationClick = () => {
    setFileViewerContent('observations');
    setShowFileViewer(true);
  };

  useEffect(() => {
    if (showFileViewer) {
      setLeftWidth(60)
    } else {
      setLeftWidth(100)
    }
  }, [showFileViewer]);

  return (
    <React.Fragment>
              {showAssessmentInput && (
                <AssessmentInput
                  assessmentId={1}
                  onExtract={handleMetaDataUpload}
                  pointerOption={[1]}
                  disabledOption={[2, 3]}
                />
              )}
              {showFileUpload && (
                <FileUploads
                  stepId={1}
                  setIsConfirmed={setMetadataConfirmed}
                  setShowFileViewer={setShowFileViewer}
                  setActiveSidePanelContent={null}
                  setActiveIframeUrl={setActiveIframeUrl}
                  setFileViewerContent={setFileViewerContent}
                  setSidePanelHeading={setSidePanelHeading}
                />
              )}
              {metadataConfirmed && (
                <AssessmentInput
                  assessmentId={2}
                  onQuestionnaire={handleQuestionnaire}
                  disabledOption={[1, 3]}
                  fadedOption={[1]}
                  pointerOption={[2, 3]}
                />
              )}
              {isQuestionnaireConfirmed && (
                <AssessmentInput
                  assessmentId={3}
                  disabledOption={[1, 2]}
                  onProductionLogs={handleProductionLogs}
                  fadedOption={[1, 2]}
                  pointerOption={[3]}
                />
              )}
              {isQuestionnaireConfirmed && showProductionLog && (
                <FileUploads
                  stepId={2}
                  setIsConfirmed={setProductionLogConfirmed}
                  setShowFileViewer={setShowFileViewer}
                  setActiveSidePanelContent={null}
                  setActiveIframeUrl={setActiveIframeUrl}
                  setFileViewerContent={setFileViewerContent}
                  setSidePanelHeading={setSidePanelHeading}
                />
              )}

              {metadataConfirmed &&
                isQuestionnaireConfirmed &&
                productionLogConfirmed && (
                  <FileUploads
                    stepId={3}
                    setIsConfirmed={setObservationConfirmed}
                    setShowFileViewer={setShowFileViewer}
                    setActiveSidePanelContent={null}
                    setActiveIframeUrl={setActiveIframeUrl}
                    setFileViewerContent={setFileViewerContent}
                    setSidePanelHeading={setSidePanelHeading}
                  />
                )}

              {observationShimmer && (
                <div style={{paddingLeft: '3.5vw'}}>
                    <Shimmer headerText="Generating the observation…"  />
                </div>
                
              )}
              {observationConfirmed && !observationShimmer && (
                <ObservationData
                  onViewObservationClick={handleViewObservationClick}
                />
              )}
              {showSummaryReport && (
                <FileUploads
                  stepId={4}
                  setIsConfirmed={setSummaryReportConfirmed}
                  setSidePanelHeading={setSidePanelHeading}
                />
              )}
              {summaryReportConfirmed && (
                <div className="agent-flex-wrapper">
                  <img
                    src={DevObjectsIcon}
                    className="devobjicon"
                    alt="dev icon"
                  />
                  <div>
                    <p className="upload-msg">
                      {UploadedFiles.find((item) => item.id === "4")?.label}
                    </p>

                    {showGraphShimmer ? (
                      <Shimmer headerText="Generating the summary report…" />
                    ) : (
                      <GraphTabs
                        onSelectChart={(chartId) => {
                          setSelectedChartId(chartId);
                          setShowFileViewer(true);
                          setFileViewerContent("chart");
                        }}
                      />
                    )}
                  </div>
                </div>
              )}


    </React.Fragment>
  );
}

export default DevelopmentAssessment