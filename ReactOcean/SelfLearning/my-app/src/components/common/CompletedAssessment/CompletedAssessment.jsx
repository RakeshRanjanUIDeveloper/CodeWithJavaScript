import React, { useContext } from "react";
import { AssessmentsComponentData } from "../../../data/AssessmentsComponentData";
import DevObjectsIcon from "../../../assets/icons/dev-objects-icon.svg";
import MainFrameContext from "../../context/MainFrameContext";
import "./CompletedAssessment.css";

const CompletedAssessment = () => {
  const { setShowDropdownComponent, lastStepDevelopment, lastStepIntegration, lastStepProcess } = useContext(MainFrameContext);

  const handleNextAssessment = (e) => {
    e.stopPropagation();
    setShowDropdownComponent(true);
  };
  return (
    <>
      <div className="agent-flex-wrapper implementation-approach-wrapper">
        <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
        <div className="help-content">
          <p>I have completed the assessment for the selections below.</p>
          <h3 className="common-assessment-header">Implementation Approach</h3>

          <div className="button-group btn-grp">
            <div className="btn-wrapper " style={{ cursor: "default" }}>
              <h6 className="btn-title">Transformation</h6>
              <p className="btn-desc">
                Process Harmonization, Organization structure changes, Non-SAP
                to SAP Transformation
              </p>
            </div>
            <div className="btn-wrapper options-btn disabled">
              <h6 className="btn-title">
                SAP Landscape (ECC) to an Advanced System (SAP S4 HANA)
              </h6>
              <p className="btn-desc">
                Upgrading or transforming an existing (Brownfield)
              </p>
            </div>
            <div className="btn-wrapper" style={{ cursor: "default" }}>
              <h6 className="btn-title">Run to New</h6>
              <p className="btn-desc">
                For existing S4 SAP systems - Clean Core Optimization
              </p>
            </div>
          </div>

          <h3 className="common-assessment-header">Assessments</h3>
          <div className="button-group button-landscape">
            {AssessmentsComponentData.map((item, index) => {
              const disableDevelopment = lastStepDevelopment && item.title === "Development Assessment"; // new
              const disableIntegration = lastStepIntegration && item.title === "Integration Assessment";
              const disableProcess = lastStepProcess && item.title === "Process Assessment";
              const isDisabled = disableDevelopment || disableIntegration || disableProcess;

              return (
                <div
                  key={index}
                  className={`btn-wrapper btn-assessment ${isDisabled ? "options-btn disabled" : ""
                    }`}
                >
                  <h6 className="btn-title">{item.title}</h6>
                  <p className="btn-desc">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="agent-flex-wrapper implementation-proceed-btn">
        <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
        <div className="help-content">
          <p>
            Would you like to proceed with the same implementation approach for
            other assessments?
          </p>
          <div className="selected-options-wrapper">
            <label
              className="options-btn upload-click"
              onClick={handleNextAssessment}
            >
              Yes
            </label>

            <label className="options-btn upload-click">No</label>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompletedAssessment;
