import React, { useState } from 'react'
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
const AssessmentsList = ({onDevelopmentAssessmentClick, showAssessmentInput}) => {


    return (
        <div className="agent-flex-wrapper">
            <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
            <div className='help-content'>
                <p>Please click on the choices below to know more about the assessments.
                </p>
                <p>I can help with assessments on Process, Developments, Architecture, Data and other areas which can give you insights on how you can migrate to S4 HANA.
                </p>
                <p>You may select any of the below options to proceed. </p>
                <div className="button-group button-landscape">
                    <div className='btn-assessment-wrapper'>
                        <div className="btn-wrapper btn-assessment">
                            <h6 className="btn-title">Process Assessment</h6>
                            <p className="btn-desc">
                                Fit to Standard, Harmonization of processes, Maximize S/4 Hana usage/ value
                            </p>
                        </div>
                        <div className="btn-wrapper btn-assessment">
                            <h6 className="btn-title">Data Assessment</h6>
                            <p className="btn-desc">
                                Data quality profiling, cleansing, construction and validation
                            </p>
                        </div>
                        <div className="btn-wrapper btn-assessment">
                            <h6 className="btn-title">Talent & Change Assessment</h6>
                            <p className="btn-desc">
                                Change journeys by process, new ways of working and learning needs
                            </p>
                        </div>
                    </div>
                    <div className='btn-assessment-wrapper'>
                        <div className="btn-wrapper btn-assessment">
                            <h6 className="btn-title">Architecture Assessment</h6>
                            <p className="btn-desc">
                                Cloud readiness/RISE, Resiliency with E2E Obeservability, Devops readiness
                            </p>
                        </div>
                        <div className="btn-wrapper btn-assessment">
                            <h6 className="btn-title">Security Assessment</h6>
                            <p className="btn-desc">Communication, Code, Audit, logging, Data Security and Privacy</p>
                        </div>
                    </div>
                    <div className='btn-assessment-wrapper'>
                        <div className={`btn-wrapper btn-assessment btn-develop ${showAssessmentInput ? 'selected' : ''}`}
                         onClick={onDevelopmentAssessmentClick}>
                            <h6 className="btn-title">Development Assessment</h6>
                            <p className="btn-desc">
                                Ensure clean core development, reduce technical dept. Fiori first approach
                            </p>
                        </div>
                        <div className="btn-wrapper btn-assessment">
                            <h6 className="btn-title">Integration Assessment</h6>
                            <p className="btn-desc">Modern Integration platform and Services, API and event driven Compasibility</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AssessmentsList