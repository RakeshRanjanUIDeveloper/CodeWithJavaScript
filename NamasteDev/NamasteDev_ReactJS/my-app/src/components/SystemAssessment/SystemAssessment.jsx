import React, { useState, useEffect } from 'react'
import ScrollToBottom from 'react-scroll-to-bottom';
import './SystemAssessment.css'
import SapAgentDropdown from '../SapAgentDropdown/SapAgentDropdown';
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import BackArrow from "../../assets/icons/back-arrow.svg";
import HeaderIcon from '../../assets/icons/agent-main-icon.svg';
import ClearIcon from "../../assets/icons/clear-icon.svg";
import Shimmer from '../Shimmer/Shimmer';
import AssessmentsList from '../AssessmentsList/AssessmentsList';
import AssessmentInput from '../AssessmentInput/AssessmentInput';
import Questionnaire from '../Questionnaire/Questionnaire';
import FileUploads from '../FileUpload/FileUploads';
import ResizableLayout from '../ResizableLayout/ResizableLayout';
import ObservationData from '../ObservationData/ObservationData';
import GraphTabs from '../Graphs/GraphTabs';
import { UploadedFiles } from "../../data/UploadedFiles";
import useShimmer from '../Shimmer/useShimmer';


const SystemAssessment = () => {
    const [initialLoading, setInitialLoading] = useState(true);
    const [selectedClient, setSelectedClient] = useState('');
    const [agentClick, setAgentClick] = useState('');
    const [contact, setContact] = useState(false);
    const [selectedApproach, setSelectedApproach] = useState('');
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

    const showShimmer = useShimmer(contact, 5000);

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


    const handleDevelopmentAssessment = () => {
        setShowAssessmentInput(true);
    }
    const handleUpload = () => {
        setShowFileUpload(true);
    }
    const handleQuestionnaire = () => {
        setShowQuestionnaire(true);
        setQuestionnairePanelOpen(true);
        setActiveSidePanelContent('questionnaire');
    };
    const handleQuestionnaireConfirm = () => {
        setQuestionnaireConfirmed(true);
    }
    const handleProductionLogs = () => {
        setShowProductionLog(true)
    }
    return (
        <React.Fragment>
            <div className='main-wrapper' >
                <div className="assessment-header">
                    <div className="left-header">
                        <span className="back-arrow"><img src={BackArrow} alt="back" /></span>
                        <img src={HeaderIcon} className="header-icon" alt="header icon" />
                        <div className='header-tag-wrapper'>
                            <div className="header-super-agent">
                                <h1 className="header-title">SAP System Assessment Agent</h1>
                                <div className="super-agent">
                                    <span>Super Agent</span>
                                </div>
                            </div>

                            {/* <h4>Development Assessment</h4> */}

                        </div>
                    </div>

                    <div className="right-header">
                        <button className="clear-btn" onClick={resetAssessment}><img src={ClearIcon} alt="pause" /> Clear</button>
                        {/* <p className="triggered-text">Triggered 7h ago</p> */}
                    </div>
                </div>
                {
                    initialLoading ? <Shimmer /> : (
                        <ScrollToBottom className="sap-agent-container">
                            <div className="sap-agent-wrapper">
                                <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
                                <div className="sap-right-wrapper">
                                    <h2 className="content-header">Welcome to the SAP System Assessment Agent</h2>
                                    <p className="description">I can help you assess your SAP system and recommend solutions. I can generate system diagnostic assessments on Process, Architecture, Developments, Integration, Data, Security and Talent & Change.
                                        <br />
                                        <br />
                                        Please select your client's name to begin the process.
                                    </p>
                                    <SapAgentDropdown
                                        options={['Clients (3)', 'Client A', 'Client B', 'Client C']}
                                        placeholder="Select client’s name"
                                        onSelect={(value) => {
                                            setSelectedClient(value);
                                        }}
                                    />
                                </div>
                            </div>
                            {selectedClient && (
                                <div className="agent-flex-wrapper">
                                    <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
                                    <div className="deliver-agent-wrapper">
                                        <p className="section-text">Let me know what you are using this agent for.</p>
                                        <div className="button-group button-sell-grp">
                                            <div className="btn-wrapper"  style={{ cursor: 'default' }}>
                                                <h6 className="btn-title">Sell</h6>
                                                <div className="btn-desc">You are using the agent for a client opportunity</div>
                                            </div>

                                            <div
                                                className={`btn-wrapper ${agentClick === 'Deliver' ? 'selected' : ''} enabled`}
                                                onClick={() => setAgentClick('Deliver')}
                                            >
                                                <h6 className="btn-title">Deliver</h6>
                                                <div className="btn-desc">You are using the agent for a client contract</div>
                                            </div>

                                            <div className="btn-wrapper"  style={{ cursor: 'default' }}>
                                                <h6 className="btn-title">Learn</h6>
                                                <p className="btn-desc">You are exploring the agent</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {
                                agentClick && (
                                    <div className="agent-flex-wrapper">
                                        <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
                                        <div>
                                            <p className="section-text">
                                                I see you are using this agent for a client contract. Please select your Contract ID to proceed.
                                            </p>
                                            <SapAgentDropdown
                                                options={['Contract (2)', '9123456782', '2384917491']}
                                                placeholder="Select Contract ID"
                                                onSelect={() => { setContact(true); }}
                                            />
                                        </div>
                                    </div>
                                )
                            }
                            {
                                contact && (
                                    <div className="agent-flex-wrapper">
                                        <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
                                        <p className="note-text">
                                            Thank you for providing your inputs. This will help us to understand your needs better.
                                        </p>
                                    </div>
                                )
                            }
                            {
                                showShimmer && <Shimmer />
                            }
                            {
                                !showShimmer && selectedClient && agentClick && contact && (
                                    <div className="agent-flex-wrapper">
                                        <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
                                        <div className='help-content'>
                                            <p>What would you like to get started with today?</p>
                                            <p>
                                                I can help with assessments on Process, Developments, Architecture, Data, Integrations, Security and Talent & Change which can give you insights on how you can migrate to S4 HANA.
                                            </p>
                                            <p>To begin with, please confirm the implementation approach you would like to begin with. </p>
                                            <div className="button-group btn-begin">
                                                <div className="btn-wrapper "  style={{ cursor: 'default' }}>
                                                    <h6 className="btn-title">Transformation</h6>
                                                    <p className="btn-desc">Process Harmonization, Organization structure changes, Non-SAP to SAP Transformation</p>
                                                </div>
                                                <div
                                                    className={`btn-wrapper brownfield-hover ${selectedApproach === 'Landscape' ? 'selected' : ''}`}
                                                    onClick={() => setSelectedApproach('Landscape')} >
                                                    <h6 className="btn-title">SAP Landscape (ECC) to an Advanced System (SAP S4 HANA)</h6>
                                                    <p className="btn-desc">Upgrading or transforming an existing (Brownfield)</p>
                                                </div>
                                                <div className="btn-wrapper"  style={{ cursor: 'default' }}>
                                                    <h6 className="btn-title">Run to New</h6>
                                                    <p className="btn-desc">For existing S4 SAP systems - Clean Core Optimization</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                selectedApproach === 'Landscape' && (<AssessmentsList onDevelopmentAssessmentClick={handleDevelopmentAssessment}
                                    showAssessmentInput={showAssessmentInput} />)
                            }
                            {
                                showAssessmentInput && (<AssessmentInput assessmentId={1} onExtract={handleUpload}         // Buttons 2 and 3 are greyed out
                                    pointerOption={[1]} disabledOption={[2, 3]} />)
                            }
                            {
                                showFileUpload && (<FileUploads stepId={1}
                                    showAssessmentInput={showAssessmentInput}
                                    setShowAssessmentInput={setShowAssessmentInput}
                                    setIsConfirmed={setMetadataConfirmed}
                                />)
                            }
                            {
                                metadataConfirmed && showFileUpload && (<AssessmentInput assessmentId={2} disabledOption={[1, 3]} onQuestionnaire={handleQuestionnaire} fadedOption={[1]}            // Only 1 is faded
                                    pointerOption={[2, 3]} />)
                            }
                            {
                                questionnairePanelOpen && activeSidePanelContent === 'questionnaire' && (
                                    <div className="agent-flex-wrapper">
                                        <ResizableLayout
                                            activeIframeUrl={null} // no iframe here
                                            customContent={<Questionnaire onQuestionnaireConfirm={handleQuestionnaireConfirm} />}
                                        />
                                    </div>
                                )
                            }
                            {
                                isQuestionnaireConfirmed && (<AssessmentInput assessmentId={3} disabledOption={[1, 2]} onProductionLogs={handleProductionLogs} fadedOption={[1, 2]}
                                    pointerOption={[3]} />)
                            }
                            {
                                showProductionLog && <FileUploads stepId={2} setIsConfirmed={setProductionLogConfirmed} />
                            }
                            {productionLogConfirmed && (
                                <>
                                    <FileUploads
                                        stepId={3}
                                        setIsConfirmed={setObservationConfirmed}
                                        setShowObservationContent={setShowObservationContent}
                                        setActiveSidePanelContent={setActiveSidePanelContent}

                                    />
                                </>
                            )}
                            {observationConfirmed && (
                                <div className="agent-flex-wrapper">
                                    <ResizableLayout
                                        customLeftContent={
                                            <ObservationData
                                                onViewObservationClick={() => {
                                                    setShowObservationPanel(true);
                                                }}
                                            />
                                        }
                                        showObservationPanel={showObservationPanel}
                                        setActiveSidePanelContent={setActiveSidePanelContent}
                                        onConfirmObservation={() => setShowSummaryReport(true)}
                                    />
                                </div>
                            )}
                            {showSummaryReport && (
                                <FileUploads
                                    stepId={4}
                                    setIsConfirmed={setSummaryReportConfirmed}
                                />
                            )}
                            {summaryReportConfirmed && (
                                <div className="agent-flex-wrapper">
                                    <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
                                    <div>
                                        <p className="upload-msg">
                                            {
                                                UploadedFiles.find(item => item.id === '4')?.label
                                            }
                                        </p>

                                        <GraphTabs />
                                    </div>
                                </div>
                            )}






                        </ScrollToBottom>
                    )
                }
            </div>


        </React.Fragment>

    )
}

export default SystemAssessment