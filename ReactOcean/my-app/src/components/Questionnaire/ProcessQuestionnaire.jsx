import React, { useState, useEffect, useContext } from 'react';
import SapAgentDropdown from '../common/SapAgentDropdown/SapAgentDropdown';
import ConfirmIcon from "../../assets/icons/confirm-icon.png";
import CrossIcon from "../../assets/icons/clear-icon.svg";
import '../Home/Home.css';
import MainFrameContext from '../context/MainFrameContext';

const ProcessQuestionnaire = () => {
    const [currentStep, setCurrentStep] = useState(1);

    const [erpVersion, setErpVersion] = useState('');
    const [isUnicode, setIsUnicode] = useState('');
    const [systemAvailability, setSystemAvailability] = useState('');
    const [namespace, setNamespace] = useState('');
    const [clientNumber, setClientNumber] = useState('');

    const { setHierarchyStep, incrementHierarchyStep, hierarchy, setIsRightPanelOpen } = useContext(MainFrameContext);

    useEffect(() => {
        if (currentStep === 1 && erpVersion) setCurrentStep(2);
        else if (currentStep === 2 && isUnicode) setCurrentStep(3);
        else if (currentStep === 3 && systemAvailability) setCurrentStep(4);
        else if (currentStep === 4 && namespace) setCurrentStep(5);
        else if (currentStep === 5 && clientNumber) setCurrentStep(6);
    }, [
        erpVersion,
        isUnicode,
        systemAvailability,
        namespace,
        clientNumber,
        currentStep
    ]);

    const handleClose = () => {
        setIsRightPanelOpen(false);

        if (typeof setHierarchyStep === 'function') {
            setHierarchyStep("Process Assessment", 2);
        } else if (typeof incrementHierarchyStep === 'function') {
            const current = hierarchy?.["Process Assessment"] || 1;
            incrementHierarchyStep("Process Assessment", current + 1);
        }
    };

    return (
        <React.Fragment>
            <img
                src={CrossIcon}
                className="cross-icon"
                alt="Close"
                onClick={handleClose}
            />

            <div className="extracts-wrapper">
                <h3>Response to the Questionnaire</h3>
                <button className="confirm-btn">
                    <img src={ConfirmIcon} className="confirm-tick-img" alt="Confirm" />
                    Confirm
                </button>
            </div>

            <div className="questionair-container">
                <h3>Please provide details</h3>

                {currentStep >= 1 && (
                    <SapAgentDropdown
                        label="What is the current SAP ERP Version (ECC & EHP version)?"
                        options={['ABC', 'DEF', '123']}
                        onSelect={(value) => setErpVersion(value)}
                        placeholder="Enter Version"
                    />
                )}

                {currentStep >= 2 && (
                    <div className="questionair-blocks">
                        <p>Is the system already in Unicode?</p>
                        <div className="radio-columns">
                            <div className="left-block">
                                <label>
                                    <input
                                        type="radio"
                                        name="isUnicode"
                                        value="Yes"
                                        onChange={(e) => setIsUnicode(e.target.value)}
                                    />
                                    Yes
                                </label>
                            </div>
                            <div className="right-block">
                                <label>
                                    <input
                                        type="radio"
                                        name="isUnicode"
                                        value="No"
                                        onChange={(e) => setIsUnicode(e.target.value)}
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep >= 3 && (
                    <div className="questionair-blocks radio2-flex-wrapper">
                        <p>Is a sandbox or quality system with a recent copy of production data available for Accenture to run its tools in? If yes, provide the following details:</p>
                        <div className="radio-columns">
                            <div className="left-block">
                                <label>
                                    <input
                                        type="radio"
                                        name="systemAvailability"
                                        value="Yes"
                                        onChange={(e) => setSystemAvailability(e.target.value)}
                                    />
                                    Yes
                                </label>
                            </div>
                            <div className="right-block">
                                <label>
                                    <input
                                        type="radio"
                                        name="systemAvailability"
                                        value="No"
                                        onChange={(e) => setSystemAvailability(e.target.value)}
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                    </div>
                )}

                {currentStep >= 4 && (
                    <div className="questionair-blocks namespace-flex-container">
                        <div className="namespace-input-block">
                            <p>System ID</p>
                            <input
                                type="text"
                                placeholder="Enter System ID"
                                value={namespace}
                                onChange={(e) => setNamespace(e.target.value)}
                            />
                        </div>
                        <div className="client-number-input-block">
                            <p>Client Number</p>
                            <input
                                type="text"
                                placeholder="Enter Client Number"
                                value={clientNumber}
                                onChange={(e) => setClientNumber(e.target.value)}
                            />
                        </div>
                    </div>
                )}
            </div>
        </React.Fragment>
    );
};

export default ProcessQuestionnaire;
 