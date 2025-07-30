    export const developmentInputs = [
        {
            id: 1,
            introText: 'Based on your selection, I can analyze your Development objects (RICEFW) for you to understand your system better. ​ For the assessment, you will need to share all the 3 inputs mentioned below. Which one would you like to start with?',
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
            introText: 'Thank you for filling in the Questionnaire. ​To complete the process please click on the next input Production logs to get the logs',
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
    ]