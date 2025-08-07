import React, { useState, useEffect, useContext } from 'react'
import SapAgentDropdown from '../common/SapAgentDropdown/SapAgentDropdown';
import ConfirmIcon from "../../assets/icons/confirm-icon.png";
import CrossIcon from "../../assets/icons/clear-icon.svg"
import ToolsImg from "../../assets/icons/tools.png";
import './Questionnaire.css';
import '../Home/Home.css';
import MainFrameContext from '../context/MainFrameContext';

const Questionnaire = ({onQuestionnaireConfirm}) => {
    const [questionStep, setQuestionStep] = useState(1);
    const [client, setClient] = useState('');
    const [group, setGroup] = useState('');
    const [industry, setIndustry] = useState('');
    const [scope, setScope] = useState('');
    const [opportunity, setOpportunity] = useState('');
    const [planProduct, setPlanProduct] = useState('');
    const [sapVersion, setSapVersion] = useState('');
    const [namespace, setNamespace] = useState('');
    const [useCustomNamespace, setUseCustomNamespace] = useState(false);
    const [customNamespace, setCustomNamespace] = useState('');
    const [selectedAssessmentType, setSelectedAssessmentType] = useState(null);
      const {setHierarchyStep, incrementHierarchyStep, hierarchy, setIsRightPanelOpen} = useContext(MainFrameContext); 

    useEffect(() => {
        if (questionStep === 1 && client) setQuestionStep(2);
        else if (questionStep === 2 && group) setQuestionStep(3);
        else if (questionStep === 3 && industry) setQuestionStep(4);
        else if (questionStep === 4 && scope) setQuestionStep(5);
        else if (questionStep === 5 && opportunity) setQuestionStep(6);
        else if (questionStep === 6 && planProduct) setQuestionStep(7);
        else if (questionStep === 7 && sapVersion) setQuestionStep(8);
        else if (questionStep === 8 && namespace) setQuestionStep(9);
        else if (questionStep === 9 && useCustomNamespace) setQuestionStep(10);
    }, [
        client,
        group,
        industry,
        scope,
        opportunity,
        planProduct,
        sapVersion,
        namespace,
        useCustomNamespace,
        questionStep,
    ]);
    return (
        <React.Fragment>
            <img src={CrossIcon} className="cross-icon" alt="" onClick={() => {
              setIsRightPanelOpen(false);
              incrementHierarchyStep(hierarchy);
            }} />
            <div className="extracts-wrapper">
                <h3>Questionnaire & Survey</h3>
                <button className="confirm-btn" >
                    <img src={ConfirmIcon} className='confirm-tick-img' />
                    Confirm
                </button>
            </div>
            {/* <img src={ToolsImg} className="text-formatting-toolbar" /> */}
            <div className="questionair-container">
                <h3>Please provide details</h3>

                {questionStep >= 1 && (
                    <SapAgentDropdown
                        label="Client Name"
                        options={['ABC', 'DEF', '123']}
                        onSelect={(value) => setClient(value)}
                        placeholder="Select Client"
                    />
                )}

                {questionStep >= 2 && (
                    <SapAgentDropdown
                        label="Operating Group"
                        options={['NA', 'EU', 'APAC']}
                        onSelect={(value) => setGroup(value)}
                        placeholder="Select Group"
                    />
                )}

                {questionStep >= 3 && (
                    <SapAgentDropdown
                        label="Industry"
                        options={['Resources', 'Tech', 'Products']}
                        onSelect={(value) => {
                            setIndustry(value);

                        }}
                        placeholder="Industry"
                    />
                )}

                {questionStep >= 4 && (
                    <SapAgentDropdown
                        label="Current Accenture scope at client"
                        options={['All', 'Few']}
                        onSelect={(value) => {
                            setScope(value);

                        }}
                        placeholder="Current Accenture scope at client"
                    />
                )}

                {questionStep >= 5 && (
                    <SapAgentDropdown
                        label="Type of opportunity"
                        options={['Brownfield', 'Greenfield']}
                        onSelect={(value) => {
                            setOpportunity(value);

                        }}
                        placeholder="Type of opportunity"
                    />
                )}

                {questionStep >= 6 && (
                    <div className="questionair-blocks">
                        <p>What is the planned target S/4HANA product and version?</p>
                        <label>
                            <input
                                type="radio"
                                name="planProduct"
                                value="S/4HANA EM 1809 FPSx"
                                onChange={(e) => {
                                    setPlanProduct(e.target.value);
                                    // step 7
                                }}
                            />
                            S/4HANA EM 1809 FPSx
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="planProduct"
                                value="S/4HANA EM 1909 FPSx"
                                onChange={(e) => {
                                    setPlanProduct(e.target.value);

                                }}
                            />
                            S/4HANA EM 1909 FPSx
                        </label>
                    </div>
                )}

                {questionStep >= 7 && (
                    <div className="questionair-blocks radio2-flex-wrapper">
                        <p>Please select the current SAP ERP version</p>
                        <div className="radio-columns">
                            <div className="left-block">
                                <label>
                                    <input
                                        type="radio"
                                        name="sapVersion"
                                        value="Suite on HANA (SoH)"
                                        onChange={(e) => {
                                            setSapVersion(e.target.value);
                                            // step 8
                                        }}
                                    />
                                    Suite on HANA (SoH)
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="sapVersion"
                                        value="EHP 7"
                                        onChange={(e) => {
                                            setSapVersion(e.target.value);

                                        }}
                                    />
                                    EHP 7
                                </label>
                            </div>
                            <div className="right-block">
                                <label>
                                    <input
                                        type="radio"
                                        name="sapVersion"
                                        value="ECC 6"
                                        onChange={(e) => {
                                            setSapVersion(e.target.value);

                                        }}
                                    />
                                    ECC 6
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name="sapVersion"
                                        value="ECC 5"
                                        onChange={(e) => {
                                            setSapVersion(e.target.value);

                                        }}
                                    />
                                    ECC 5
                                </label>
                            </div>
                        </div>
                    </div>
                )}

                {questionStep >= 8 && (
                    <div className="questionair-blocks">
                        <p>Enter customer Internal Namespaces</p>
                        <input
                            type="text"
                            placeholder="OCUST"
                            value={namespace}
                            onChange={(e) => {
                                setNamespace(e.target.value);
                                // step 9
                            }}
                        />
                    </div>
                )}

                {questionStep >= 9 && (
                    <div className="questionair-blocks input-block-wrapper">
                        <label>
                            <input
                                type="radio"
                                checked={useCustomNamespace}
                                onChange={(e) => setUseCustomNamespace(e.target.checked)}
                            />
                            I want to use specific namespace
                        </label>

                        {useCustomNamespace && (
                            <label className="input-label">
                                Please Specify Namespace
                                <input
                                    type="text"
                                    value={customNamespace}
                                    onChange={(e) => setCustomNamespace(e.target.value)}
                                />
                            </label>
                        )}
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default Questionnaire