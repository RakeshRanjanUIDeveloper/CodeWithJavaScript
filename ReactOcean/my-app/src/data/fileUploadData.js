export const fileUploadData = [
  {
    id: 1,
    fileTitle:
      "I see you have selected the option to share the ‘Extracts containing metadata from source’. Please click on ‘Upload’ to upload metadata extracts to proceed.",
    fileButtons: ["Proceed", "Upload"],
    onClick: "onMetaDataUpload",
    uploadSuccessMessage: "Thank you for uploading metadata. To view the metadata extracted, click on the file icon.",
  },
  {
    id: 2,
    fileTitle:
      "I see you have selected the Production Log. Please click on ‘Upload’ to upload the log.",
    fileButtons: ["Proceed", "Upload"],
    onClick: "onProductionLogUpload",
    uploadSuccessMessage: "Thank you for uploading the production log. Click on the file icon to review it.",
  },
  {
    id: 3,
    fileTitle:
      "I have the extracts for metadata from source system, the responses from the questionnaire and the production logs. I can analyze your data and share some observations. You may click on ‘Proceed’ to continue.",
    fileButtons: ["Proceed"],
    onClick: "onObservationsUpload",
    uploadSuccessMessage: "",
  },
  {
    id: 4,
    fileTitle:
      "You have reviewed the observation. Please click on ‘Proceed’ to generate the summary report.",
    fileButtons: ["Proceed"],
    onClick: "onObservationReportUpload",
    uploadSuccessMessage: "Thank you for uploading the summary report.",
  },
];
