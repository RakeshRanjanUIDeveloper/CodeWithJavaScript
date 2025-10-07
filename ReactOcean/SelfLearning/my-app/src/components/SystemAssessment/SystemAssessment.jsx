import React, { useState, useEffect, useRef, useContext } from "react";
import ScrollToBottom from "react-scroll-to-bottom";
import "./SystemAssessment.css";
import SapAgentDropdown from "../common/SapAgentDropdown/SapAgentDropdown";
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import BackArrow from "../../assets/icons/back-arrow.svg";
import HeaderIcon from "../../assets/icons/agent-main-icon.svg";
import ClearIcon from "../../assets/icons/clear-icon.svg";
import Shimmer from "../common/Shimmer/Shimmer";
import AssessmentsList from "../common/AssessmentsList/AssessmentsList";
import useShimmer from "../common/Shimmer/useShimmer";
import MainFrameContext from "../context/MainFrameContext";
import ResizableLayout from "../common/ResizableLayout/ResizableLayout";
import Questionnaire from "../Questionnaire/Questionnaire";
import ObservationData from "../ObservationData/ObservationData";
import RICEFWBarChart from "../Graphs/RICEFWBarChart";
import ReportSubcategoryChart from "../Graphs/ReportSubcategoryChart";
import RecommendationChart from "../Graphs/RecommendationChart";
import ExtensibilityChart from "../Graphs/ExtensibilityChart";
import useResizeUtility from "../utils/useResizeUtility";
import ScreenMode from "../common/ScreenMode/ScreenMode";
import ProcessQuestionnaire from "../Questionnaire/ProcessQuestionnaire";
import ProcessObservationData from "../ObservationData/ProcessObservationData"
import ReportSummary from "../Graphs/IntegrationGraphs/ReportSummary";
import RecommendedSolutions from "../Graphs/IntegrationGraphs/RecommendedSolutions";
import ProcessRICEFWBarChart from "../Graphs/ProcessGraphs/ProcessRICEFWBarChart";
import ProcessReportSubcategoryChart from "../Graphs/ProcessGraphs/ProcessReportSubcategoryChart";
import ProcessRecommendationChart from "../Graphs/ProcessGraphs/ProcessRecommendationChart";
import ProcessExtensibilityChart from "../Graphs/ProcessGraphs/ProcessExtensibilityChart";

const SystemAssessment = () => {
  const { selectedComponent, isRightPanelOpen, setIsRightPanelOpen, uploadeadFile, setHierarchy, setHierarchySteps, openedAssessments } = useContext(MainFrameContext);
  const [SelectedAssessmentComponent, setSelectedAssessmentComponent] = useState(null);
  const [initialLoading, setInitialLoading] = useState(true);
  const [selectedClient, setSelectedClient] = useState("");
  const [agentClick, setAgentClick] = useState("");
  const [contact, setContact] = useState(false);
  const [selectedApproach, setSelectedApproach] = useState("");
  const showShimmer = useShimmer(contact, 2000);
  const [leftWidth, setLeftWidth] = useState(100);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const animationFrameId = useRef(null);
  const outerWrapperRef = useRef(null);
  const isDragging = useRef(false);

  useEffect(() => {
    if (isRightPanelOpen) {
      setLeftWidth(60)
    } else {
      setLeftWidth(100)
    }
  }, [isRightPanelOpen]);
  const { handleMouseDown } = useResizeUtility({
    outerWrapperRef,
    animationFrameId,
    isDragging,
    setLeftWidth,
  });

  const resetAssessment = () => {
    setInitialLoading(true);
    setSelectedClient("");
    setAgentClick("");
    setContact(false);
    setSelectedApproach("");
    setSelectedAssessmentComponent(null);
    setHierarchy(null);
    setHierarchySteps({});
    setIsRightPanelOpen(false);
    setTimeout(() => {
      setInitialLoading(false);
    }, 2000);
  };
  useEffect(() => {
    if (selectedClient && agentClick === "Deliver") {
      setAgentClick("Deliver");
    }
    const timer = setTimeout(() => {
      setInitialLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [selectedClient]);

  const renderRightPanel = () => {
    console.log("Selected Component:", selectedComponent);
    console.log("Uploaded File:", uploadeadFile);

    if (uploadeadFile && selectedComponent?.type === "file") {
      return <ResizableLayout activeIframeUrl={uploadeadFile.officeUrl} />;
    }

    if (selectedComponent?.type === "form") {
      return <CustomFormComponent />;
    }

    if (selectedComponent?.type === "questionnaire") {
      return <Questionnaire />;
    }
    if (selectedComponent?.type === "observation") {
      return <ObservationData />;
    }
    if (selectedComponent?.type === "chart") {
      switch (selectedComponent.id) {
        case "summary":
          return <RICEFWBarChart activeTab="summary" />;
        case "system":
          return <ReportSubcategoryChart activeTab="system" />;
        case "deepdive":
          return <RecommendationChart activeTab="deepdive" />;
        case "solutions":
          return <ExtensibilityChart activeTab="solutions" />;
        case "IntegrationSummary":
          return <ReportSummary activeTab="IntegrationSummary" />;
        case "IntegrationSolutions":
          return <RecommendedSolutions activeTab="IntegrationSolutions" />;
        case "processsummary":
          return <ProcessRICEFWBarChart activeTab="processsummary" />;
        case "processsystem":
          return <ProcessReportSubcategoryChart activeTab="processsystem" />;
        case "processdeepdive":
          return <ProcessRecommendationChart activeTab="processdeepdive" />;
        case "processsolutions":
          return <ProcessExtensibilityChart activeTab="processsolutions" />;
        default:
          return <p>Chart not found</p>;
      }
    }

    if (selectedComponent?.type === "ProcessQuestionnaire") {
      return <ProcessQuestionnaire />;
    }
    if (selectedComponent?.type === "ProcessObservationData") {
      return <ProcessObservationData />
    }
    return <p>No content to show.</p>;
  };
  return (
    <React.Fragment>
      <div className="outer-wrapper" ref={outerWrapperRef}>
        <div className={`main-wrapper`}>
          <div className={`left-pane ${isFullscreen ? "hide-left" : ""} ${isRightPanelOpen ? "shrinked" : ""}`}
            style={{ width: isFullscreen ? "0%" : `${leftWidth}%` }}>
            <div className="assessment-header">
              <div className="left-header">
                <span className="back-arrow">
                  <img src={BackArrow} alt="back" />
                </span>
                <img
                  src={HeaderIcon}
                  className="header-icon"
                  alt="header icon"
                />
                <div className="header-tag-wrapper">
                  <div className="header-super-agent">
                    <h1 className="header-title">
                      SAP System Assessment Agent
                    </h1>
                    <div className="super-agent">
                      <span>Super Agent</span>
                    </div>
                  </div>
                  {SelectedAssessmentComponent?.title && (
                    <p className="dev-assess">
                      {SelectedAssessmentComponent.title}
                    </p>
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
                          <p className="btn-desc">
                            You are exploring the agent
                          </p>
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
                  <div style={{ paddingLeft: "3.5vw" }}>
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
                        Change which can give you insights on how you can
                        migrate to S4 HANA.
                      </p>
                      <p>
                        To begin with, please confirm the implementation
                        approach you would like to begin with.{" "}
                      </p>
                      <div className="button-group btn-begin">
                        <div
                          className="btn-wrapper "
                          style={{ cursor: "default" }}
                        >
                          <h6 className="btn-title">Transformation</h6>
                          <p className="btn-desc">
                            Process Harmonization, Organization structure
                            changes, Non-SAP to SAP Transformation
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
                            For existing S4 SAP systems - Clean Core
                            Optimization
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {selectedApproach === "Landscape" && (
                  <AssessmentsList
                    setSelectedAssessmentComponent={
                      setSelectedAssessmentComponent
                    }
                    SelectedAssessmentComponent={SelectedAssessmentComponent}
                  />
                )}
                {SelectedAssessmentComponent && <SelectedAssessmentComponent />}
                {openedAssessments.map((assessment, index) => (
                  <assessment.assessmentComponent key={index} />
                ))}
              </ScrollToBottom>
            )}
          </div>
          {isRightPanelOpen && !isFullscreen && (
            <div className="divider" onMouseDown={handleMouseDown}>
              <div className="divider-handle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 7 13"
                  fill="none"
                >
                  <path
                    id="Icon"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M0.166238 6.05384L5.70186 0.224031C5.92272 -0.012177 6.27985 -0.012177 6.50071 0.224031L6.83435 0.580855C7.05522 0.817063 7.05522 1.19902 6.83435 1.43522L2.02711 6.48102L6.82965 11.5268C7.05052 11.763 7.05052 12.145 6.82965 12.3812L6.49601 12.738C6.27515 12.9742 5.91802 12.9742 5.69716 12.738L0.161538 6.90821C-0.0546229 6.672 -0.0546229 6.29004 0.166238 6.05384Z"
                    fill="black"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 7 14"
                  fill="none"
                >
                  <path
                    id="Icon"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.83376 7.39148L1.29814 13.2213C1.07728 13.4575 0.720147 13.4575 0.499286 13.2213L0.165646 12.8645C-0.0552151 12.6282 -0.0552151 12.2463 0.165646 12.0101L4.97289 6.96429L0.170346 1.91849C-0.0505146 1.68228 -0.0505146 1.30033 0.170346 1.06412L0.503987 0.7073C0.724848 0.471092 1.08198 0.471092 1.30285 0.7073L6.83846 6.53711C7.05462 6.77332 7.05462 7.15527 6.83376 7.39148Z"
                    fill="black"
                  />
                </svg>
              </div>
            </div>
          )}
          {isRightPanelOpen && (
            <div className={`right-pane ${isFullscreen ? "full-width" : ""}`}
              style={{
                width: isFullscreen ? "100%" : `${98 - leftWidth}%`,
                flexGrow: isFullscreen ? 1 : 0,
                maxWidth: isFullscreen ? "100%" : "unset",

              }}
            >
              <div className="right-panel-icons">
                <ScreenMode
                  isFullscreen={isFullscreen}
                  setIsFullscreen={setIsFullscreen}
                />
              </div>
              {renderRightPanel()}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default SystemAssessment;
