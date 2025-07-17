export const fileUploadData = [
    {
        id: 1,
        fileTitle: "I see you have selected the option to share the ‘Extracts containing metadata from source’. Please click on ‘Upload’ to upload metadata extracts to proceed.",
        fileButtons: ['Proceed', 'Upload'],
        onClick: 'onMetaDataUpload'
    },
    {
        id: 2,
        fileTitle :'I see you have selected the Production Log. Please click on ‘Upload’ to upload the log.',
        fileButtons: ['Proceed', 'Upload'],
        onClick: 'onProductionLogUpload'
    },
    {
        id: 3,
        fileTitle : 'I have the extracts for metadata from source system, the responses from the questionnaire and the production logs. I can analyze your data and share some observations. You may click on ‘Proceed’ to continue.',
        fileButtons: ['Proceed'],
        onClick: 'onObservationsUpload'
    },
    {
        id:4,
        fileTitle :'You have reviewed the observation. Please click on ‘Proceed’ to generate the summary report.',
        fileButtons : ['Proceed'],
        onClick: 'onObservationReportUpload'
    }
]