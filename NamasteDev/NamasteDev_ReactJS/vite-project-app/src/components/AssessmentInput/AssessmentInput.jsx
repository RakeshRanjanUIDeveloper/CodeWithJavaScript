import React from 'react'
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import './AssessmentInput.css'
const AssessmentInput = ({onExtract, disabledOption}) => {
    const developmentInputs = [
        {
            id:1,
            text: 'Extracts containing metadata from source',
            onClick: onExtract,
            isclickable: true
        },
        {
            id:2,
            text: 'Responses to the Questionnaire',
            onClick: 'OnQuestionnaire',
            isclickable: true
        },
        {
            id:3,
            text: 'Production Logs',
            onClick: '',
            isclickable: true
        }
    ]
    return (
        <div className="agent-flex-wrapper">
            <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
            <div className='help-content assessment-container'>
                <p>Based on your selection, I can analyze your Development objects (RICEFW) for you to understand your system better.For the assessment, you will need to share all the 3 inputs mentioned below.</p>
                <br />
                <p>Which one would you like to start with?</p>
                <div className="dev-objects-btn-wrapper">
                    {
                        developmentInputs.map((item) => (
                            <p key={item.id} onClick={item.onClick} style={disabledOption === item.id ? {pointerEvents:'none', opacity:'0.5'} : {}} >{item.text}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AssessmentInput