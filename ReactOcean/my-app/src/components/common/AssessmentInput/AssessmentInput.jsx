import React from 'react'
import DevObjectsIcon from "../../../assets/icons/dev-objects-icon.svg";
import './AssessmentInput.css'
import { systemAssessmentInputs } from '../../../data/systemAssessmentInputs';
import '../FileUpload/FileUpload.css'

const AssessmentInput = ({
    onExtract,
    onQuestionnaire,
    onProductionLogs,
    disabledOption = [],
    fadedOption = [],
    pointerOption = [],
    assessmentId
}) => {
    const config = systemAssessmentInputs.find(item => item.id === assessmentId);
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
                    {config.inputs.map((item) => {
                        const isDisabled = disabledOption.includes(item.id);
                        const isFaded = fadedOption.includes(item.id);
                        const showPointer = pointerOption.includes(item.id);
                        const hasAction = !!functionMap[item.onClick];

                        return (
                            <p
                                key={item.id}
                                onClick={!isDisabled ? functionMap[item.onClick] : undefined}
                                style={{
                                    pointerEvents: isDisabled ? 'none' : 'auto',
                                    opacity: isFaded ? 0.5 : 1,
                                    cursor: showPointer ? 'pointer' : 'default',
                                }}
                            >
                                {item.text}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default AssessmentInput