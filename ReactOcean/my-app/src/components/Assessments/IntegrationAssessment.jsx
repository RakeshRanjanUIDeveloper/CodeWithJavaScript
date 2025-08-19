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
import "../../styles/IntegrationAssessment.css";
import IntegrationGraphTabs from '../../components/Graphs/IntegrationGraphs/IntegrationGraphTabs';
import AssessmentDropDownList from '../common/AssessmentDropdownList/AssessmentDropDownList';
import CompletedAssessment from '../common/CompletedAssessment/CompletedAssessment';

const IntegrationAssessment = () => {
  const [showIntegrationAssessment, setShowIntegrationAssessment] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [showSapUpload, setShowSapUpload] = useState(false);
  const [showCpiUpload, setShowCpiUpload] = useState(false);
  const [eccConfirmed, setEccConfirmed] = useState(false);
  const [sapConfirmed, setSapConfirmed] = useState(false);
  const [cpiConfirmed, setCpiConfirmed] = useState(false);
  const [resultsConfirmed, setResultsConfirmed] = useState(false);
  const resultShimmer = useShimmer(resultsConfirmed, 5000);
  const [activeIframeUrl, setActiveIframeUrl] = useState(null);
  const [showIntegrationInputs, setShowIntegrationInputs] = useState(false);
  const { hierarchySteps, setIsRightPanelOpen, hierarchyStep, hierarchy, setSelectedComponent, showDropdownComponent, lastStepIntegration } = useContext(MainFrameContext);

  useEffect(() => {
    setShowIntegrationAssessment(true)
  }, [])

  useEffect(() => {
    const integrationStep = hierarchySteps["Integration Assessment"];
    if (integrationStep === 1) {
      setShowIntegrationInputs(true);
    } else if (integrationStep === 2) {
      setShowFileUpload(true);
    } else if (integrationStep === 3) {
      setEccConfirmed(true);
    } else if (integrationStep === 4) {
      setShowSapUpload(true);
    } else if (integrationStep === 5) {
      setSapConfirmed(true);
    } else if (integrationStep === 6) {
      setShowCpiUpload(true);
    } else if (integrationStep === 7) {
      setCpiConfirmed(true);
    }

    setIsRightPanelOpen(false);
  }, [hierarchySteps, hierarchyStep, hierarchy]);

  const handleEccUpload = () => {
    setShowFileUpload(true);
  }

  const handleSapUpload = () => {
    setShowSapUpload(true);
  }

  const handleCpiUpload = () => {
    setShowCpiUpload(true);
  }

  const handleGraphTabClick = (tabId) => {
    setSelectedComponent({ id: tabId, type: 'chart' });
    setIsRightPanelOpen(true);
  };

  const [answers, setAnswers] = useState({
    q1: null,
    q2: null
  });

  const handleAnswerChange = (question, value) => {
    setAnswers(prev => ({ ...prev, [question]: value }));
  };

  const bothAnswered = answers.q1 !== null && answers.q2 !== null;

  useEffect(() => {
    if (bothAnswered) {
      const timer = setTimeout(() => {
        setShowIntegrationInputs(true);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setShowIntegrationInputs(false);
    }
  }, [bothAnswered]);

  return (
    <React.Fragment>
      {
        showIntegrationAssessment && (
          <div className="agent-flex-wrapper">
            <img src={DevObjectsIcon} className="devobjicon" alt="assessment icon" />
            <div className="requirements-wrapper">
              <p>To proceed with the Integration Assessment, I’ll need your input on the requirements through the questionnaire provided below.</p>
              <div className="questionnaire-section">
                <div className="question">
                  <p>Q1. Do you plan to use the existing SAP PI/ PO as integration platform?</p>
                  <div className="radio-group">
                    <label className="custom-radio">
                      <input
                        type="radio"
                        name="q1"
                        checked={answers.q1 === true}
                        onChange={() => handleAnswerChange('q1', true)}
                      />
                      <span className="radio-mark"></span>Yes
                    </label>
                    <label className="custom-radio">
                      <input
                        type="radio"
                        name="q1"
                        checked={answers.q1 === false}
                        onChange={() => handleAnswerChange('q1', false)}
                      />
                      <span className="radio-mark"></span>No
                    </label>
                  </div>
                </div>

                <div className="question">
                  <p>Q2. Do you have SAP ECC integration with SAP CPI/ BTP Integration Suite?</p>
                  <div className="radio-group">
                    <label className="custom-radio">
                      <input
                        type="radio"
                        name="q2"
                        checked={answers.q2 === true}
                        onChange={() => handleAnswerChange('q2', true)}
                      />
                      <span className="radio-mark"></span>Yes
                    </label>
                    <label className="custom-radio">
                      <input
                        type="radio"
                        name="q2"
                        checked={answers.q2 === false}
                        onChange={() => handleAnswerChange('q2', false)}
                      />
                      <span className="radio-mark"></span>No
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
      {bothAnswered && (
        <div className="agent-flex-wrapper">
          <img src={DevObjectsIcon} className="devobjicon" alt="assessment icon" />
          <div className="selection-basis-wrapper">
            <p>Based on your selection, I can analyze your Integrations and impact assessment for SAP PI/PO and SAP CPI/BTP.</p>
          </div>
        </div>
      )}
      {showIntegrationInputs && (
        <AssessmentInput
          dataList={systemAssessmentInputs.IntegrationAssessmentInputs}
          assessmentId={1}
          functionMap={{
            onEccImpacted: handleEccUpload,
          }}
          pointerOption={[1]}
          disabledOption={[2, 3]}
          hierarchy="Integration Assessment"
          hierarchyStep={1}
        />
      )}
      {showFileUpload && (
        <FileUploads
          fileUploadDataList={fileUploadData.integrationFileUploadData}
          shimmerHeadersList={shimmerHeaders.integrationShimmerHeaders}
          stepId={1}
          setActiveIframeUrl={setActiveIframeUrl}
          hierarchy="Integration Assessment"
          hierarchyStep={2}
        />
      )}
      {eccConfirmed && (
        <AssessmentInput
          dataList={systemAssessmentInputs.IntegrationAssessmentInputs}
          assessmentId={2}
          functionMap={{
            onSapPO: handleSapUpload,
          }}
          disabledOption={[1, 3]}
          fadedOption={[1]}
          pointerOption={[2, 3]}
          hierarchy="Integration Assessment"
          hierarchyStep={3}
        />
      )}
      {showSapUpload && (
        <FileUploads
          fileUploadDataList={fileUploadData.integrationFileUploadData}
          shimmerHeadersList={shimmerHeaders.integrationShimmerHeaders}
          stepId={2}
          setActiveIframeUrl={setActiveIframeUrl}
          hierarchy="Integration Assessment"
          hierarchyStep={4}
        />
      )}
      {sapConfirmed && (
        <AssessmentInput
          dataList={systemAssessmentInputs.IntegrationAssessmentInputs}
          assessmentId={3}
          functionMap={{
            onSapCPI: handleCpiUpload,
          }}
          disabledOption={[1, 2]}
          fadedOption={[1, 2]}
          pointerOption={[3]}
          hierarchy="Integration Assessment"
          hierarchyStep={5}
        />
      )}
      {showCpiUpload && (
        <FileUploads
          fileUploadDataList={fileUploadData.integrationFileUploadData}
          shimmerHeadersList={shimmerHeaders.integrationShimmerHeaders}
          stepId={3}
          setActiveIframeUrl={setActiveIframeUrl}
          hierarchy="Integration Assessment"
          hierarchyStep={6}
        />
      )}
      {eccConfirmed && sapConfirmed && cpiConfirmed && (
        <>
          <FileUploads
            fileUploadDataList={fileUploadData.integrationFileUploadData}
            stepId={4}
            onProceed={() => setResultsConfirmed(true)}
            setActiveIframeUrl={setActiveIframeUrl}
            hierarchy="Integration Assessment"
            hierarchyStep={7}
          />
        </>
      )}
      {resultsConfirmed && (
        <>
          <div className="agent-flex-wrapper">
            <img src={DevObjectsIcon} className="devobjicon" alt="assessment icon" />
            <div className="selection-basis-wrapper">
              <p>Summarizing your report for your Integration Objects impact assessment for S/4 HANA conversion.</p>
            </div>
          </div>

          {resultShimmer ? (
            <div style={{ paddingLeft: '3.5vw' }}>
              <Shimmer headerText="Generating the Analysis..." />
            </div>
          ) : (
            <IntegrationGraphTabs onTabClick={handleGraphTabClick} />
          )}
        </>
      )}
      {lastStepIntegration && <CompletedAssessment />}
      {lastStepIntegration && showDropdownComponent && <AssessmentDropDownList />}
    </React.Fragment>
  )
}

export default IntegrationAssessment
