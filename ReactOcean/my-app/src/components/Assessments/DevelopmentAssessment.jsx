import React, { useRef, useState, useEffect } from 'react'
import Questionnaire from '../Questionnaire/Questionnaire';
import FileUploads from '../FileUpload/FileUploads';
import ResizableLayout from '../ResizableLayout/ResizableLayout';
import ObservationData from '../ObservationData/ObservationData';
import GraphTabs from '../Graphs/GraphTabs';
import { UploadedFiles } from "../../data/UploadedFiles";
import useResizeUtility from '../utils/useResizeUtility';
import RICEFWBarChart from '../../components/Graphs/RICEFWBarChart';
import ReportSubcategoryChart from '../../components/Graphs/ReportSubcategoryChart';
import RecommendationChart from '../../components/Graphs/RecommendationChart';
import ExtensibilityChart from '../../components/Graphs/ExtensibilityChart';
import CrossIcon from "../../assets/icons/clear-icon.svg"
import ScreenMode from "../ScreenMode/ScreenMode";


const DevelopmentAssessment = () => {
    const [metadataConfirmed, setMetadataConfirmed] = useState(false);
    const [showFileUpload, setShowFileUpload] = useState(false);
    const [productionLogConfirmed, setProductionLogConfirmed] = useState(false);
    const [observationConfirmed, setObservationConfirmed] = useState(false);
    const [showObservationContent, setShowObservationContent] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isQuestionnaireConfirmed, setQuestionnaireConfirmed] = useState(false);
    const [showQuestionnaire, setShowQuestionnaire] = useState(false);
    const [questionnairePanelOpen, setQuestionnairePanelOpen] = useState(false);
    const [activeSidePanelContent, setActiveSidePanelContent] = useState(null);
    const [showObservationPanel, setShowObservationPanel] = useState(false);
    const [showSummaryReport, setShowSummaryReport] = useState(false);
    const [summaryReportConfirmed, setSummaryReportConfirmed] = useState(false);

    const handleDevelopmentAssessment = () => {
        setShowAssessmentInput(true);
    }
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
        if (productionLogConfirmed) {
            setCurrentStepId(3);
        }
    }, [productionLogConfirmed]);

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
                <div style={{ paddingLeft: '3.5vw' }}>
                    <Shimmer headerText="Generating the observation…" />
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

            {showFileViewer && !isFullscreen && (
                <div className="divider" onMouseDown={handleMouseDown}>
                    <div className="divider-handle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 13" fill="none">
                            <path id="Icon" fillRule="evenodd" clipRule="evenodd" d="M0.166238 6.05384L5.70186 0.224031C5.92272 -0.012177 6.27985 -0.012177 6.50071 0.224031L6.83435 0.580855C7.05522 0.817063 7.05522 1.19902 6.83435 1.43522L2.02711 6.48102L6.82965 11.5268C7.05052 11.763 7.05052 12.145 6.82965 12.3812L6.49601 12.738C6.27515 12.9742 5.91802 12.9742 5.69716 12.738L0.161538 6.90821C-0.0546229 6.672 -0.0546229 6.29004 0.166238 6.05384Z" fill="black" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 7 14" fill="none">
                            <path id="Icon" fillRule="evenodd" clipRule="evenodd" d="M6.83376 7.39148L1.29814 13.2213C1.07728 13.4575 0.720147 13.4575 0.499286 13.2213L0.165646 12.8645C-0.0552151 12.6282 -0.0552151 12.2463 0.165646 12.0101L4.97289 6.96429L0.170346 1.91849C-0.0505146 1.68228 -0.0505146 1.30033 0.170346 1.06412L0.503987 0.7073C0.724848 0.471092 1.08198 0.471092 1.30285 0.7073L6.83846 6.53711C7.05462 6.77332 7.05462 7.15527 6.83376 7.39148Z" fill="black" />
                        </svg>
                    </div>
                </div>
            )}

            {showFileViewer && (
                <div
                    className="file-viewer-panel"
                    style={{
                        width: isFullscreen ? "100%" : `${98 - leftWidth}%`,
                        flexGrow: isFullscreen ? 1 : 0,
                        maxWidth: isFullscreen ? "100%" : "unset",
                        transition: "width 0.3s ease"
                    }}
                >
                    <div className='right-panel-icons'>
                        <ScreenMode isFullscreen={isFullscreen} setIsFullscreen={setIsFullscreen} />
                    </div>
                    <br />
                    <ResizableLayout
                        activeIframeUrl={
                            fileViewerContent === "excel" ? activeIframeUrl : null
                        }
                        customContent={
                            fileViewerContent === "chart" ? (
                                getChartComponent(selectedChartId)
                            ) : fileViewerContent === "questionnaire" ? (
                                <Questionnaire
                                    onQuestionnaireConfirm={handleQuestionnaireConfirm}
                                />
                            ) : null
                        }
                        sidePanelHeading={sidePanelHeading}
                        showObservationPanel={fileViewerContent === "observations"}
                        observationPanelContent={
                            <div className="resizer-right-panel">
                                <img src={CrossIcon} className="cross-icon" alt="" onClick={() => {
                                    setShowFileViewer(false);
                                    setShowSummaryReport(true);
                                }} />
                                <div className="extracts-wrapper">
                                    <h3>Observations</h3>
                                    <div className="confirm-bar">
                                        <button className="confirm-btn">
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                        onConfirmExcel={() => {
                            if (currentStepId === 1) {
                                setMetadataConfirmed(true);
                            } else if (currentStepId === 2) {
                                setProductionLogConfirmed(true);
                            } else if (currentStepId === 3) {
                                // setObservationShimmer(true);
                                setObservationConfirmed(true);
                                // setTimeout(() => {
                                //   setObservationShimmer(false);

                                // }, 5000);
                            }
                            setShowFileViewer(false);
                            /*  setLeftWidth(90); */
                        }}
                    />
                </div>
            )}
        </React.Fragment>
    )
}

export default DevelopmentAssessment