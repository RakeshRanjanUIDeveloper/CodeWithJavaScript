import React, { useState } from 'react'
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import './AssessmentInput.css'
const AssessmentInput = ({onExtract}) => {
    const developmentInputs = [
        {
            id:1,
            text: 'Extracts containing metadata from source',
            onClick: onExtract
        },
        {
            id:2,
            text: 'Responses to the Questionnaire'
        },
        {
            id:3,
            text: 'Production Logs'
        }
    ]
    return (
        <div className="agent-flex-wrapper">
            <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
            <div className='help-content assessment-container'>
                <p>Based on your selection, I can analyze your Development objects (RICEFW) for you to understand your system better. ​ For the assessment, you will need to share all the 3 inputs mentioned below.</p>
                <br />
                <p>Which one would you like to start with?</p>
                <div className="dev-objects-btn-wrapper">
                    {
                        developmentInputs.map((item) => (
                            <p key={item.id} onClick={item.onClick}>{item.text}</p>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default AssessmentInput