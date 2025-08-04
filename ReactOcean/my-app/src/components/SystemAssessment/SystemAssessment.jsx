import React, { useState, useEffect, useRef } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import './SystemAssessment.css'
import SapAgentDropdown from '../SapAgentDropdown/SapAgentDropdown';
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import BackArrow from "../../assets/icons/back-arrow.svg";
import HeaderIcon from '../../assets/icons/agent-main-icon.svg';
import ClearIcon from "../../assets/icons/clear-icon.svg";
import Shimmer from '../Shimmer/Shimmer';
import useShimmer from '../utils/useShimmer';
import { AssessmentsComponentData } from '../../data/AssessmentsComponentData';
import ResizableLayout from '../ResizableLayout/ResizableLayout';
import useResizeUtility from '../utils/useResizeUtility';
import ScreenMode from "../ScreenMode/ScreenMode";
import CrossIcon from "../../assets/icons/clear-icon.svg"

const SystemAssessment = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [selectedClient, setSelectedClient] = useState('');
  const [agentClick, setAgentClick] = useState('');
  const [contact, setContact] = useState(false);
  const [selectedApproach, setSelectedApproach] = useState('');
  const [SelectedAssessmentComponent, setSelectedAssessmentComponent] = useState(null);
  const [showFileViewer, setShowFileViewer] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const showShimmer = useShimmer(contact, 5000);


  const resetAssessment = () => {
    setSelectedClient('');
    setAgentClick('');
    setContact(false);
    setSelectedApproach('');
    setShowFileUpload(false);
    setIsConfirmed(false);
    setInitialLoading(true);
  }


  useEffect(() => {
    if (selectedClient && agentClick === 'Deliver') {
      setAgentClick('Deliver')
    }
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [selectedClient]);

  useEffect(() => {
    if (showFileViewer) {
      setLeftWidth(60)
    } else {
      setLeftWidth(100)
    }
  }, [showFileViewer]);

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



  return (
    <React.Fragment>
      <div className="outer-wrapper" ref={outerWrapperRef}>
        <div className={`main-wrapper ${showFileViewer ? "shrinked" : ""} ${isFullscreen ? "fullscreen-main" : ""}`}
          style={{ width: isFullscreen ? "0%" : `${leftWidth}%` }}>
          <div className="assessment-header">
            <div className="left-header">
              <span className="back-arrow">
                <img src={BackArrow} alt="back" />
              </span>
              <img src={HeaderIcon} className="header-icon" alt="header icon" />
              <div className="header-tag-wrapper">
                <div className="header-super-agent">
                  <h1 className="header-title">SAP System Assessment Agent</h1>
                  <div className="super-agent">
                    <span>Super Agent</span>
                  </div>
                </div>
                {/* {showAssessmentInput && (
                  <p className="dev-assess">Development Assessment</p>
                )} */}
              </div>
            </div>

            <div className="right-header">
              <button className="clear-btn" onClick={resetAssessment}>
                <img src={ClearIcon} alt="pause" /> Clear
              </button>
              {/* <p className="triggered-text">Triggered 7h ago</p> */}
            </div>
          </div>
          {initialLoading ? (
            <Shimmer />
          ) : (
            <ScrollToBottom className="sap-agent-container">
              <div className="sap-agent-wrapper">
                <img
                  src={DevObjectsIcon}
                  className="devobjicon"
                  alt="dev icon"
                />
                <div className="sap-right-wrapper">
                  <h2 className="content-header">
                    Welcome to the SAP System Assessment Agent
                  </h2>
                  <p className="description">
                    I can help you assess your SAP system and recommend
                    solutions. I can generate system diagnostic assessments on
                    Process, Architecture, Developments, Integration, Data,
                    Security and Talent & Change.
                    <br />
                    <br />
                    Please select your client's name to begin the process.
                  </p>
                  <SapAgentDropdown
                    options={[
                      "Clients (3)",
                      "Client A",
                      "Client B",
                      "Client C",
                    ]}
                    placeholder="Select client’s name"
                    onSelect={(value) => {
                      setSelectedClient(value);
                    }}
                  />
                </div>
              </div>

              {selectedClient && (
                <div className="agent-flex-wrapper">
                  <img
                    src={DevObjectsIcon}
                    className="devobjicon"
                    alt="dev icon"
                  />
                  <div className="deliver-agent-wrapper">
                    <p className="section-text">
                      Let me know what you are using this agent for.
                    </p>
                    <div className="button-group button-sell-grp">
                      <div
                        className="btn-wrapper"
                        style={{ cursor: "default" }}
                      >
                        <h6 className="btn-title">Sell</h6>
                        <div className="btn-desc">
                          You are using the agent for a client opportunity
                        </div>
                      </div>

                      <div
                        className={`btn-wrapper ${agentClick === "Deliver" ? "selected" : ""
                          } enabled`}
                        onClick={() => setAgentClick("Deliver")}
                      >
                        <h6 className="btn-title">Deliver</h6>
                        <div className="btn-desc">
                          You are using the agent for a client contract
                        </div>
                      </div>

                      <div
                        className="btn-wrapper"
                        style={{ cursor: "default" }}
                      >
                        <h6 className="btn-title">Learn</h6>
                        <p className="btn-desc">You are exploring the agent</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {agentClick && (
                <div className="agent-flex-wrapper">
                  <img
                    src={DevObjectsIcon}
                    className="devobjicon"
                    alt="dev icon"
                  />
                  <div>
                    <p className="section-text">
                      I see you are using this agent for a client contract.
                      Please select your Contract ID to proceed.
                    </p>
                    <SapAgentDropdown
                      options={["Contract (2)", "9123456782", "2384917491"]}
                      placeholder="Select Contract ID"
                      onSelect={() => {
                        setContact(true);
                      }}
                    />
                  </div>
                </div>
              )}
              {contact && (
                <div className="agent-flex-wrapper">
                  <img
                    src={DevObjectsIcon}
                    className="devobjicon"
                    alt="dev icon"
                  />
                  <p className="note-text">
                    Thank you for providing your inputs. This will help us to
                    understand your needs better.
                  </p>
                </div>
              )}
              {showShimmer && (
                <div style={{ paddingLeft: '3.5vw' }}>
                  <Shimmer />
                </div>
              )}
              {!showShimmer && selectedClient && agentClick && contact && (
                <div className="agent-flex-wrapper">
                  <img
                    src={DevObjectsIcon}
                    className="devobjicon"
                    alt="dev icon"
                  />
                  <div className="help-content">
                    <p>What would you like to get started with today?</p>
                    <p>
                      I can help with assessments on Process, Developments,
                      Architecture, Data, Integrations, Security and Talent &
                      Change which can give you insights on how you can migrate
                      to S4 HANA.
                    </p>
                    <p>
                      To begin with, please confirm the implementation approach
                      you would like to begin with.{" "}
                    </p>
                    <div className="button-group btn-begin">
                      <div
                        className="btn-wrapper "
                        style={{ cursor: "default" }}
                      >
                        <h6 className="btn-title">Transformation</h6>
                        <p className="btn-desc">
                          Process Harmonization, Organization structure changes,
                          Non-SAP to SAP Transformation
                        </p>
                      </div>
                      <div
                        className={`btn-wrapper brownfield-hover ${selectedApproach === "Landscape" ? "selected" : ""
                          }`}
                        onClick={() => setSelectedApproach("Landscape")}
                      >
                        <h6 className="btn-title">
                          SAP Landscape (ECC) to an Advanced System (SAP S4
                          HANA)
                        </h6>
                        <p className="btn-desc">
                          Upgrading or transforming an existing (Brownfield)
                        </p>
                      </div>
                      <div
                        className="btn-wrapper"
                        style={{ cursor: "default" }}
                      >
                        <h6 className="btn-title">Run to New</h6>
                        <p className="btn-desc">
                          For existing S4 SAP systems - Clean Core Optimization
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {selectedApproach === "Landscape" && (
                <div className="agent-flex-wrapper">
                  <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
                  <div className="help-content">
                    <>
                      <p>Please click on the choices below to know more about the assessments.</p>
                      <p>I can help with assessments on Process, Developments, Architecture, Data and other areas which can give you insights on how you can migrate to S4 HANA.</p>
                      <p>You may select any of the below options to proceed.</p>

                      <div className="button-group button-landscape">
                        {AssessmentsComponentData.map((item) => {
                          const isSelected = SelectedAssessmentComponent?.name === item.assessmentComponent?.name;

                          return (
                            <div
                              key={item.id}
                              className={`btn-wrapper btn-assessment ${isSelected ? "selected" : ""}`}
                              onClick={() => setSelectedAssessmentComponent(() => item.assessmentComponent)}>
                              <h6 className="btn-title">{item.title}</h6>
                              <p className="btn-desc">{item.description}</p>
                            </div>
                          );
                        })}
                      </div>

                    </>
                  </div>
                </div>
              )}
              {SelectedAssessmentComponent && (
                <SelectedAssessmentComponent />
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
            </ScrollToBottom>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default SystemAssessment