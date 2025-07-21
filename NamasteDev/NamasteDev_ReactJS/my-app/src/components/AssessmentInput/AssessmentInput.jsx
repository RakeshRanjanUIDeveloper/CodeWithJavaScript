import React from 'react'
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import './AssessmentInput.css'
import { developmentInputs } from '../../data/developmentInputsData';
import '../FileUpload/FileUpload.css'

const AssessmentInput = ({ onExtract, onQuestionnaire, onProductionLogs, disabledOption, assessmentId }) => {

    const config = developmentInputs.find(item => item.id === assessmentId);
    if (!config) return null;
    const functionMap = {
        onExtract,
        onQuestionnaire,
        onProductionLogs
    };
    return (
        <div className="agent-flex-wrapper">
            <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
            <div className='help-content assessment-container'>
                <p>{config.introText}</p>
                <div className="dev-objects-btn-wrapper">
                    {
                        config.inputs.map((item) => (
                            <p
                                key={item.id}
                                onClick={
                                    disabledOption?.includes(item.id)
                                        ? undefined
                                        : functionMap[item.onClick] || undefined
                                }
                                style={
                                    disabledOption?.includes(item.id)
                                        ? { pointerEvents: 'none', opacity: '0.5' }
                                        : {}
                                }
                            >
                                {item.text}
                            </p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AssessmentInput