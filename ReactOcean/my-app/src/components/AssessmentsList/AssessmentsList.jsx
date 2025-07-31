import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import { AssessmentsComponentData } from '../../data/AssessmentsComponentData';
import '../SystemAssessment/SystemAssessment.css'
const AssessmentsList = ({ onSelectAssessment }) => {
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
                        {
                            AssessmentsComponentData.map((component) => (
                                <div className="btn-wrapper btn-assessment" key={component.id} onClick={() =>onSelectAssessment(component.assessmentComponent)}>
                                    <h6 className="btn-title">{component.title}</h6>
                                    <p className="btn-desc">{component.description}</p>
                                </div>
                            ))
                        }
                   
                </div>
            </div>
        </div>
    )
}

export default AssessmentsList