import React, { useState, useEffect, useRef } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import './SystemAssessment.css'
import SapAgentDropdown from '../SapAgentDropdown/SapAgentDropdown';
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import BackArrow from "../../assets/icons/back-arrow.svg";
import HeaderIcon from '../../assets/icons/agent-main-icon.svg';
import ClearIcon from "../../assets/icons/clear-icon.svg";
import Shimmer from '../Shimmer/Shimmer';
import AssessmentsList from '../AssessmentsList/AssessmentsList';
import useShimmer from '../Shimmer/useShimmer';

const SystemAssessment = () => {
  const [initialLoading, setInitialLoading] = useState(true);
  const [selectedClient, setSelectedClient] = useState('');
  const [agentClick, setAgentClick] = useState('');
  const [contact, setContact] = useState(false);
  const [selectedApproach, setSelectedApproach] = useState('');
  const [showAssessmentInput, setShowAssessmentInput] = useState(false);
  const [activeAssessmentComponent, setActiveAssessmentComponent] = useState(null);
  const [showFileViewer, setShowFileViewer] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const showShimmer = useShimmer(contact, 5000);
  const outerWrapperRef = useRef(null);
  const [leftWidth, setLeftWidth] = useState(100);


  const resetAssessment = () => {
    setSelectedClient('');
    setAgentClick('');
    setContact(false);
    setSelectedApproach('');
    setShowAssessmentInput(false);
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
                {showAssessmentInput && (
                  <p className="dev-assess">Development Assessment</p>
                )}
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
                      Architecture, Data, Integrations, Security and Talent &
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
                <AssessmentsList onSelectAssessment={setActiveAssessmentComponent} />
              )}

              {activeAssessmentComponent && (
                <div className="assessment-component-view">
                  {(() => {
                    const SelectedComponent = activeAssessmentComponent;
                    return <SelectedComponent />;
                  })()}
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