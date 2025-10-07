export const systemAssessmentInputs = {
    DevelopmentAssessmentInputs: [
        {
            id: 1,
            introText: 'Based on your selection, I can analyze your Development objects (RICEFW) for you to understand your system better.  For the assessment, you will need to share all the 3 inputs mentioned below. Which one would you like to start with?',
            inputs: [
                {
                    id: 1,
                    text: 'Extracts containing metadata from source',
                    onClick: 'onExtract',
                },
                {
                    id: 2,
                    text: 'Responses to the Questionnaire',
                    onClick: '',
                },
                {
                    id: 3,
                    text: 'Production Logs',
                    onClick: '',
                }
            ]
        },
        {
            id: 2,
            introText: 'I see we have the extracts containing metadata from source. You may now select what would you like to do next input. ',
            inputs: [
                {
                    id: 1,
                    text: 'Extracts containing metadata from source',
                    onClick: '',
                },
                {
                    id: 2,
                    text: 'Responses to the Questionnaire',
                    onClick: 'onQuestionnaire',
                },
                {
                    id: 3,
                    text: 'Production Logs',
                    onClick: '',
                }
            ]
        },
        {
            id: 3,
            introText: 'Thank you for filling in the Questionnaire. To complete the process please click on the next input Production logs to get the logs',
            inputs: [
                {
                    id: 1,
                    text: 'Extracts containing metadata from source',
                    onClick: '',
                },
                {
                    id: 2,
                    text: 'Responses to the Questionnaire',
                    onClick: '',
                },
                {
                    id: 3,
                    text: 'Production Logs',
                    onClick: 'onProductionLogs',
                }
            ]
        }
    ],
    IntegrationAssessmentInputs: [
        {
            id: 1,
            introText: 'For the assessment, you will need to share all the 3 inputs mentioned below.',
            inputs: [
                {
                    id: 1,
                    text: 'ECC impacted Interface extract',
                    onClick: 'onEccImpacted'
                },
                {
                    id: 2,
                    text: 'SAP PO Interface extracts',
                    onClick: ''
                },
                {
                    id: 3,
                    text: 'SAP CPI Interface extract',
                    onClick: ''
                }
            ]
        },
        {
            id: 2,
            introText: 'I see we have the extracts from interfaces. You may now select what would you like to do next input. ​',
            inputs: [
                {
                    id: 1,
                    text: 'ECC impacted Interface extract',
                    onClick: ''
                },
                {
                    id: 2,
                    text: 'SAP PO Interface extracts',
                    onClick: 'onSapPO'
                },
                {
                    id: 3,
                    text: 'SAP CPI Interface extract',
                    onClick: ''
                }
            ]
        },
        {
            id: 3,
            introText: 'Thank you for uploading the SAP PO Extract. ​To complete the assessment, please click on ‘SAP CPI Impact Analysis’ to get the required input​',
            inputs: [
                {
                    id: 1,
                    text: 'ECC impacted Interface extract',
                    onClick: ''
                },
                {
                    id: 2,
                    text: 'SAP PO Interface extracts',
                    onClick: ''
                },
                {
                    id: 3,
                    text: 'SAP CPI Interface extract',
                    onClick: 'onSapCPI'
                }
            ]
        }
    ],
    ProcessAssessmentInputs: [
        {
            id: 1,
            introText: 'Thank you for filling in the Questionnaire. Based on your Questionnaire submission, I can assess your Processes for you to understand your system better.  For the assessment, you should have the following logs and reports available for upload. Which one would you like to start with?',
            inputs: [
                {
                    id: 1,
                    text: 'Functional Impact Analysis Extract',
                    onClick: 'onFunctionalClick'
                },
                {
                    id: 2,
                    text: 'Production Transaction Report Logs',
                    onClick: ''
                },
                {
                    id: 3,
                    text: 'SAP Readiness Check (SRC) Report',
                    onClick: ''
                }
            ]
        },
        {
            id: 2,
            introText: 'You have shared the Functional Impact Analysis extracts. You may now select ‘Production Transaction Report Logs’ to upload the next input.  ',
            inputs: [
                {
                    id: 1,
                    text: 'Functional Impact Analysis Extract',
                    onClick: ''
                },
                {
                    id: 2,
                    text: 'Production Transaction Report Logs',
                    onClick: 'onProductionClick'
                },
                {
                    id: 3,
                    text: 'SAP Readiness Check (SRC) Report',
                    onClick: ''
                }
            ]
        },
        {
            id: 3,
            introText: 'You have shared the Functional Impact Analysis extracts and Production Transaction Report logs. You may now select ‘SAP Readiness Check (SRC) Report’ to get the next input. ',
            inputs: [
                {
                    id: 1,
                    text: 'Functional Impact Analysis Extract',
                    onClick: ''
                },
                {
                    id: 2,
                    text: 'Production Transaction Report Logs',
                    onClick: ''
                },
                {
                    id: 3,
                    text: 'SAP Readiness Check (SRC) Report',
                    onClick: 'onSAPClick'
                }
            ]
        }
    ]
}