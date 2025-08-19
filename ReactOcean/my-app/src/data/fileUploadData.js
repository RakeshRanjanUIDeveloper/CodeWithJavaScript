export const fileUploadData = {
  developmentFileUploadData: [
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
  ],
  integrationFileUploadData: [
    {
      id: 1,
      fileTitle:
        "I can help to assess SAP PO and SAP CPI interface impact due to S/4 HANA conversion. To start with, I need to understand impact on ECC objects due to simplification, HANA DB conversion and code remediations. Please help to upload list of ECC interfaces impacted in source ECC system.",
      fileButtons: ["Proceed", "Upload"],
      onClick: "onEccImpactedUpload",
      uploadSuccessMessage: "Thank you for uploading the ECC interfaces impacted in source ECC system. To view the impact, click on file icon",
    },
    {
      id: 2,
      fileTitle: "As per your selection, I will proceed with the SAP PO Impact Assessment. Please upload the SAP PO extract",
      fileButtons: ["Proceed", "Upload"],
      onClick: "onSapPOUpload",
      uploadSuccessMessage: "Thank you for uploading the SAP PO extract. To view the extracted file, please click on the file icon",
    },
    {
      id: 3,
      fileTitle: "As per your selection, I will proceed with the SAP CPI  Impact Analysis. Please upload the extract ",
      fileButtons: ["Proceed", "Upload"],
      onClick: "onSapCPIUpload",
      uploadSuccessMessage: "Thank you for uploading the extracts. Please select the next steps.",
    },
    {
      id: 4,
      fileTitle: "I have your extracts from Interfaces, SAP PO and SAP CPI. I can analyze your data and share some assessment results. You may click on ‘Proceed’ to continue.",
      fileButtons: ["Proceed"],
      onClick: "onResultsProceed",
      uploadSuccessMessage: "",
    },
  ],
  processFileUploadData: [
    {
      id: 1,
      fileTitle:
        "I see you have selected the option to share the extracts of Functional Impact Analysis.You can now upload the extract by clicking on ‘Upload’.",
      fileButtons: ["Proceed", "Upload"],
      uploadSuccessMessage: "Thank you for uploading the Functional Impact Analysis extracts. To view the uploaded extracts, click on file icon.",
    },
    {
      id: 2,
      fileTitle: "I see you have selected the ‘Production Transaction Report Logs’. You can now upload the ST03N Logs by clicking on ‘Upload’.",
      fileButtons: ["Proceed", "Upload"],
      uploadSuccessMessage: "Thank you for uploading the ST03N logs. To view the uploaded logs,  click on file icon.",
    },
    {
      id: 3,
      fileTitle: "I see you have selected the ‘SAP Readiness Check (SRC)’ Report. You can now upload the file by clicking on ‘Upload’.",
      fileButtons: ["Proceed", "Upload"],
      uploadSuccessMessage: "Thank you for uploading the SAP Readiness Check (SRC) Report. To view the uploaded document, click on file icon",
    },
    {
      id: 4,
      fileTitle: "I have the extracts/logs from the Functional Impact Analysis, Production Transaction Report and SRC report for the Compatibility Scope Report. I can analyze your data and share some observations. You may click on 'Proceed' to continue.",
      fileButtons: ["Proceed"],
      uploadSuccessMessage: "",
    },
    {
      id: 5,
      fileTitle: "You have reviewed the observation. Please click on ‘Proceed’ to generate the summary report. ",
      fileButtons: ["Proceed"],
      uploadSuccessMessage: "",
    }
  ]
}