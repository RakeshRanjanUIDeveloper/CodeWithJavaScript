import React, { useState, useEffect, useContext } from 'react'
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import MainFrameContext from '../context/MainFrameContext';
const IntegrationAssessment = () => {
  const [showIntegrationAssessment, setShowIntegrationAssessment]= useState(false);
  const { hierarchySteps, setIsRightPanelOpen, hierarchyStep, hierarchy, setSelectedComponent  } = useContext(MainFrameContext);
    useEffect(() => {
      setShowIntegrationAssessment(true)
    }, [])
    useEffect(() => {
        if (hierarchySteps["integration"] === 1) {

        } else if (hierarchySteps["integration"] === 2) {
    
        } 
        setIsRightPanelOpen(false);
      }, [hierarchySteps, hierarchyStep, hierarchy]);
  return (
    <React.Fragment>
      {
        showIntegrationAssessment && (
          <div className="agent-flex-wrapper">
            <img src={DevObjectsIcon} className="devobjicon" alt="assessment icon" />
            <div className="requirements-wrapper">
              <p>To proceed with the Integration Assessment, I’ll need your input on the requirements through the questionnaire provided below.</p>
              <div className="questionnaire-section">
                <div className="question">
                  <p>Q1. Do you plan to use the existing SAP PI/ PO as integration platform?</p>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </React.Fragment>
  )
}

export default IntegrationAssessment
