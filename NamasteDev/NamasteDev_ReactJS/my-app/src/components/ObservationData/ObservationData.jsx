import React from 'react';
import DevObjectsIcon from "../../assets/icons/dev-objects-icon.svg";
import { UploadedFiles } from "../../data/UploadedFiles";
import FileIcon from "../../assets/icons/file-icon.svg";


const ObservationData = ({ onViewObservationClick }) => {
    const observationData = UploadedFiles.find(file => file.id === '3');
    if (!observationData) return null;

    return (
        <div>
            <p className="note-text">{observationData.label}</p>
            <div className="file-icon-wrapper" onClick={() => {
                console.log("Clicked View Observations"); // check browser console
                onViewObservationClick();
            }} style={{ cursor: 'pointer' }}>{/* 22-july */}
                <img src={FileIcon} className="devobjicon" alt="file icon" />
                <span>View Observations</span>
            </div>
        </div>
    );
};

export default ObservationData;
 