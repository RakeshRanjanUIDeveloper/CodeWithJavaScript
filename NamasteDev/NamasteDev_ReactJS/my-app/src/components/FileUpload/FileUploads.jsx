import React from 'react'
import { fileUploadData } from '../../data/fileUploadData'
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
const FileUploads = ({stepId}) => {
     const fileStep = fileUploadData.find(file => file.id === stepId);
     if (!fileStep) return null
    return (
        <React.Fragment>
            <div className="agent-flex-wrapper">
                <img src={DevObjectsIcon} className="devobjicon" alt="dev icon" />
                <div className="help-content">
                    <p>{fileStep.fileTitle}</p>
                    <div className="selected-options-wrapper">
                        {
                            fileStep.fileButtons.map((fileButton, idx) => (
                                <button className='options-btn upload-click' key={idx}>{fileButton}</button>
                            ))
                        }
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default FileUploads