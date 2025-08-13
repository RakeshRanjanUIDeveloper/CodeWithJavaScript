import React, { useContext, useState } from "react";
import "./AssessmentDropDownList.css";
import DevObjectsIcon from "../../../assets/icons/dev-objects-icon.svg";
import Prompticon from "../../../assets/icons/prompt-icon.svg";
import SendIcon from "../../../assets/icons/send-icon.svg";
import MainFrameContext from "../../context/MainFrameContext";
import { AssessmentsComponentData } from "../../../data/AssessmentsComponentData";

const AssessmentDropDownList = ({ setSelectedAssessmentComponent, SelectedAssessmentComponent, setValidComponent }) => {
  const { hierarchy, setNextAssessmentComponent, setHierarchy,setHierarchySteps, setAssessmentCompleted } =
    useContext(MainFrameContext);

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedAssessmentTitle, setSelectedAssessmentTitle] = useState("");
  const [dropDownSelectedAssessment, setDropDownSelectedAssessment] = useState(null);

  const handleSelect = (assessment) => {
    setSelectedAssessmentTitle(assessment.title);
    setDropDownSelectedAssessment(assessment);
    setDropdownOpen(false);
    setValidComponent(true)
  };

  const handleNextAssessment = (e) => {
    e.stopPropagation();
    console.log("Selected Component:", dropDownSelectedAssessment);
    if (dropDownSelectedAssessment && Array.isArray(hierarchy) && !hierarchy.includes(dropDownSelectedAssessment.title)) {
        setNextAssessmentComponent(dropDownSelectedAssessment);
        setSelectedAssessmentComponent(() => dropDownSelectedAssessment.assessmentComponent)
        setAssessmentCompleted(false)
    }
  };


  const isSelectedItemDisabled =  dropDownSelectedAssessment && Array.isArray(hierarchy) && hierarchy.includes(dropDownSelectedAssessment.title);

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
                  const isDisabled = Array.isArray(hierarchy) && hierarchy.includes(item.title);
                  return (
                    <li
                      key={item.id}
                      onClick={() => handleSelect(item)}
                      className={`dropdown-item ${
                        isDisabled ? "disabled" : ""
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
