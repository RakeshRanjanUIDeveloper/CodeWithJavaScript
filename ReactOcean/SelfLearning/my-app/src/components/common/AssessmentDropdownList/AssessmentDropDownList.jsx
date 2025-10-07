import React, { useContext, useState } from "react";
import "./AssessmentDropDownList.css";
import DevObjectsIcon from "../../../assets/icons/dev-objects-icon.svg";
import Prompticon from "../../../assets/icons/prompt-icon.svg";
import SendIcon from "../../../assets/icons/send-icon.svg";
import MainFrameContext from "../../context/MainFrameContext";
import { AssessmentsComponentData } from "../../../data/AssessmentsComponentData";

const AssessmentDropDownList = () => {
  const { hierarchy, lastStepDevelopment, lastStepIntegration, lastStepProcess, dropDownSelectedAssessment, setDropDownSelectedAssessment, dropdownOpen, setDropdownOpen, setOpenedAssessments } =
    useContext(MainFrameContext);

  const [selectedAssessmentTitle, setSelectedAssessmentTitle] = useState("");

  const handleSelect = (assessment) => {
    setSelectedAssessmentTitle(assessment.title);
    setDropDownSelectedAssessment(assessment);
    setDropdownOpen(false);
  };

  const handleNextAssessment = (e) => {
    e.stopPropagation();
    if (
      dropDownSelectedAssessment &&
      !hierarchy.includes(dropDownSelectedAssessment.title)
    ) {
      console.log("Dropdown selected:", dropDownSelectedAssessment);
      setOpenedAssessments((prev) => {
        const alreadyOpened = prev.some(
          (assessment) => assessment.title === dropDownSelectedAssessment.title
        );
        return alreadyOpened ? prev : [...prev, dropDownSelectedAssessment];
      });
    }
  };

  const isSelectedItemDisabled =
    dropDownSelectedAssessment &&
    hierarchy.includes(dropDownSelectedAssessment.title);

  return (
    <>
      <div className="agent-flex-wrapper">
        <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
        <div className="help-content">
          <p>What would you like to do next?</p>
          <div
            className="assessment-dropdown-wrapper"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <div className="rectangle-box">
              <img src={Prompticon} alt="logo" className="dev-icon" />
              <span className="prompt-text">

                {selectedAssessmentTitle || "What would you like to do"}
              </span>
              {dropDownSelectedAssessment && !isSelectedItemDisabled && (
                <img
                  src={SendIcon}
                  className="send-icon"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNextAssessment(e);
                  }}
                  style={{ cursor: "pointer", opacity: 1 }}
                />
              )}
            </div>

            {dropdownOpen && (
              <ul className="dropdown-list">
                {AssessmentsComponentData.map((item) => {
                  const isDevelopment = item.title === "Development Assessment"; // or a better check if you have a type field
                  const isIntegration = item.title === "Integration Assessment";
                  const isProcess = item.title === "Process Assessment";
                  const isDisabled = hierarchy.includes(item.title) || (isDevelopment && lastStepDevelopment) || (isIntegration && lastStepIntegration) || (isProcess && lastStepProcess);
                  return (
                    <li
                      key={item.id}
                      onClick={() => !isDisabled && handleSelect(item)}
                      className={`dropdown-item ${isDisabled ? "disabled" : ""
                        }`}
                    >
                      {item.title}
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default AssessmentDropDownList;
