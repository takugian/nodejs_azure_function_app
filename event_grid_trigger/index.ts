import { AzureFunction, Context } from "@azure/functions"

const eventGridTrigger: AzureFunction = async function (context: Context, eventGridEvent: any): Promise<void> {
    context.log("Event Grid function processed a request.");
    context.log("Subject: " + eventGridEvent.subject);
    context.log("Time: " + eventGridEvent.eventTime);
    context.log("Data: " + JSON.stringify(eventGridEvent.data));
    context.bindings.outputEvent = [
        {
            id: 'd5474e1e-76f9-4f58-a08f-2015a16f732',
            eventType: 'QuickTutorialsWithAzure.EventGrid.UseCaseCreated',
            subject: 'usecase',
            eventTime: "2023-01-01T00:00:00",
            data: {
                "useCaseName": "custom_topic_storage_blob_to_storage_queue"
            },
            dataVersion: '1.0'
        }
    ];
};

export default eventGridTrigger;
