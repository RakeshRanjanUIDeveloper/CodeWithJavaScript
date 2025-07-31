import React, { useState, useEffect } from 'react';
import AssessmentInput from '../AssessmentInput/AssessmentInput';
import FileUploads from '../FileUpload/FileUploads';
import ObservationData from '../ObservationData/ObservationData';
import GraphTabs from '../Graphs/GraphTabs';
import RICEFWBarChart from '../Graphs/RICEFWBarChart';
import ReportSubcategoryChart from '../Graphs/ReportSubcategoryChart';
import RecommendationChart from '../Graphs/RecommendationChart';
import ExtensibilityChart from '../Graphs/ExtensibilityChart';
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import Shimmer from '../Shimmer/Shimmer';
import useShimmer from '../utils/useShimmer';
import { UploadedFiles } from "../../data/UploadedFiles";

const DevelopmentAssessment = ({
    setShowFileViewer,
    setFileViewerContent,
    setActiveIframeUrl,
    setSidePanelHeading,
    setSummaryReportConfirmed,
    setShowSummaryReport,
    setObservationConfirmed,
    setCurrentStepId,
    handleQuestionnaireConfirm,
    showSummaryReport,
    summaryReportConfirmed,
    setMetadataConfirmed,
    metadataConfirmed,
    observationConfirmed,
    productionLogConfirmed,
    setProductionLogConfirmed
}) => {
    const [showFileUpload, setShowFileUpload] = useState(false);
    const [isQuestionnaireConfirmed, setQuestionnaireConfirmed] = useState(false);
    //const [metadataConfirmed, setMetadataConfirmed] = useState(false);
    const [currentStep, setStep] = useState(null);
    const [metadataUploaded, setMetadataUploaded] = useState(false);
    const [questionnaireDone, setQuestionnaireDone] = useState(false);
    const [productionLogDone, setProductionLogDone] = useState(false);
    const [observationDone, setObservationDone] = useState(false);
    const [selectedChartId, setSelectedChartId] = useState(null);

    const observationShimmer = useShimmer(observationDone && currentStep === 3, 5000);
    const showGraphShimmer = useShimmer(setSummaryReportConfirmed, 5000);

    const handleMetaDataUpload = () => {
           setShowFileUpload(true);
        setCurrentStepId(1);
    };

    const handleQuestionnaire = () => {
        setFileViewerContent('questionnaire');
        setShowFileViewer(true);
    };

    const handleProductionLogs = () => {
        setStep(2);
    };

    const handleViewObservationClick = () => {
        setFileViewerContent('observations');
        setShowFileViewer(true);
    };

    const handleConfirmExcel = () => {
        if (currentStep === 1) {
            setMetadataUploaded(true);
            setMetadataConfirmed(true);
        } else if (currentStep === 2) {
            setProductionLogDone(true);
            setProductionLogConfirmed(true);
        } else if (currentStep === 3) {
            setObservationDone(true);
            setObservationConfirmed(true);
        }
        setShowFileViewer(false);
    };

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

  useEffect(() => {
    if (productionLogConfirmed) {
      setCurrentStepId(3);
    }

  }, [productionLogConfirmed]);

    return (
        <>
            <AssessmentInput
                assessmentId={1}
                onExtract={handleMetaDataUpload}
                pointerOption={[1]}
                disabledOption={[2, 3]}
            />
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
            {metadataUploaded && (
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
        </>
    );
};

export default DevelopmentAssessment;
