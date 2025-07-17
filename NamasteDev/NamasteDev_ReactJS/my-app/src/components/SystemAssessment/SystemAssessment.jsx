import React, { useState, useEffect, useRef } from 'react'
import './SystemAssessment.css'
import SapAgentDropdown from '../SapAgentDropdown/SapAgentDropdown';
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import BackArrow from "../../assets/icons/back-arrow.svg";
import HeaderIcon from '../../assets/icons/agent-main-icon.svg';
import ClearIcon from "../../assets/icons/clear-icon.svg";
import Shimmer from '../Shimmer/Shimmer';
import AssessmentsList from '../AssessmentsList/AssessmentsList';
import AssessmentInput from '../AssessmentInput/AssessmentInput';
import FileUpload from '../FileUpload/FileUpload';
import Questionnaire from '../Questionnaire/Questionnaire';
import FileUploads from '../FileUpload/FileUploads';

const SystemAssessment = () => {
    const [loading, setLoading] = useState(true);
    const [showAnalyzing, setShowAnalyzing] = useState(false);
    const [selectedClient, setSelectedClient] = useState('');
    const [agentClick, setAgentClick] = useState('');
    const [contact, setContact] = useState(false);
    const [selectedApproach, setSelectedApproach] = useState('');
    const [showAssessmentInput, setShowAssessmentInput] = useState(false);
    const [showFileUpload, setShowFileUpload] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [showQuestionnaire, setShowQuestionnaire] = useState(false);
    const [isQuestionnaireConfirmed, setQuestionnaireConfirmed] = useState(false);
    const [showProductionLog, setShowProductionLog] = useState(false);
    const [fileUploadStep, setFileUploadStep] = useState(null);
    const mainWrapperRef = useRef(null);


    useEffect(() => {
        if (mainWrapperRef.current) {
            mainWrapperRef.current.scrollTo({
                top: mainWrapperRef.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    }, [selectedClient, agentClick, contact, selectedApproach, showAssessmentInput, showFileUpload, uploading, isConfirmed, isQuestionnaireConfirmed, showProductionLog]);

    const resetAssessment = () =>{
            setSelectedClient('');
            setAgentClick('');
            setContact(false);
            setSelectedApproach('');
            setShowAssessmentInput(false);
            setShowFileUpload(false);
            setIsConfirmed(false);
            setLoading(true);
            setQuestionnaireConfirmed(false)
            setShowQuestionnaire(false);
            setShowProductionLog(false);
            setShowAnalyzing(false);
        if(mainWrapperRef.current){
            mainWrapperRef.current.scrollTo({
                top:0,
                behavior:'smooth'
            })
        }
    }
    useEffect(() => {
        if (selectedClient) {
            setShowAnalyzing(true);
        }
        if (selectedClient && agentClick === 'Deliver') {
            setAgentClick('Deliver')
        }
        const timer = setTimeout(() => {
            setLoading(false);
            setShowAnalyzing(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, [selectedClient]);


    const handleDevelopmentAssessment = () => {
        setShowAssessmentInput(true);
    }
    const handleUpload = () => {
        setShowFileUpload(true);
        //setFileUploadStep(1);
    }
    const handleQuestionnaire = () =>{
        setShowQuestionnaire(true);
    }
    const handleQuestionnaireConfirm = () =>{
        setQuestionnaireConfirmed(true);
    }
    const handleProductionLogs = () =>{
        setShowProductionLog(true)
        setFileUploadStep(2);
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
                    loading ? <Shimmer /> : (
                        <div className="sap-agent-container" ref={mainWrapperRef}>
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
                            {selectedClient && showAnalyzing && (
                                <React.Fragment>
                                    <div className="agent-flex-wrapper">
                                        <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
                                        <p className="section-text">Analyzing based on your selection...</p>

                                    </div>
                                    <Shimmer />
                                </React.Fragment>

                            )}
                            {selectedClient && !showAnalyzing && (
                                <div className="agent-flex-wrapper">
                                    <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
                                    <div className="deliver-agent-wrapper">
                                        <p className="section-text">Let me know what you are using this agent for.</p>
                                        <div className="button-group">
                                            <div className="btn-wrapper">
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

                                            <div className="btn-wrapper">
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
                                selectedClient && agentClick && contact && (
                                    <div className="agent-flex-wrapper">
                                        <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
                                        <div className='help-content'>
                                            <p>What would you like to get started with today?</p>
                                            <p>
                                                I can help with assessments on Process, Developments, Architecture, Data, Integrations, Security and Talent & Change which can give you insights on how you can migrate to S4 HANA.
                                            </p>
                                            <p>To begin with, please confirm the implementation approach you would like to begin with. </p>
                                            <div className="button-group btn-begin">
                                                <div className="btn-wrapper ">
                                                    <h6 className="btn-title">Transformation</h6>
                                                    <p className="btn-desc">Process Harmonization, Organization structure changes, Non-SAP to SAP Transformation</p>
                                                </div>
                                                <div
                                                    className={`btn-wrapper brownfield-hover ${selectedApproach === 'Landscape' ? 'selected' : ''}`}
                                                    onClick={() => setSelectedApproach('Landscape')} >
                                                    <h6 className="btn-title">SAP Landscape (ECC) to an Advanced System (SAP S4 HANA)</h6>
                                                    <p className="btn-desc">Upgrading or transforming an existing (Brownfield)</p>
                                                </div>
                                                <div className="btn-wrapper">
                                                    <h6 className="btn-title">Run to New</h6>
                                                    <p className="btn-desc">For existing S4 SAP systems - Clean Core Optimization</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                            {
                                selectedApproach === 'Landscape' && (<AssessmentsList onDevelopmentAssessmentClick={handleDevelopmentAssessment} />)
                            }
                            {
                                showAssessmentInput && (<AssessmentInput assessmentId={1} onExtract={handleUpload} />)
                            }
                            {
                                showFileUpload && (<FileUpload
                                    uploading={uploading} 
                                    setUploading={setUploading} 
                                    showAssessmentInput={showAssessmentInput}
                                    setShowAssessmentInput={setShowAssessmentInput}
                                    setIsConfirmed={setIsConfirmed} 
                                     />)
                            }
                            {
                                isConfirmed && showFileUpload && (<AssessmentInput  assessmentId={2} disabledOption={[1]} onQuestionnaire={handleQuestionnaire}  />)
                            }
                            {
                                showQuestionnaire && (<Questionnaire  onQuestionnaireConfirm={handleQuestionnaireConfirm} />)
                            }
                            {
                                isQuestionnaireConfirmed && (<AssessmentInput  assessmentId={3} disabledOption={[1,2]} onProductionLogs={handleProductionLogs}/>)
                            }
                            {
                                showProductionLog && fileUploadStep && <FileUploads stepId={fileUploadStep}  />
                            }
                        </div>
                    )
                }
            </div>


        </React.Fragment>

    )
}

export default SystemAssessment