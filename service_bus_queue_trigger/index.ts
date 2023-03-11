import { AzureFunction, Context } from "@azure/functions"

const serviceBusQueueTrigger: AzureFunction = async function(context: Context, mySbMsg: any): Promise<void> {
    context.log('ServiceBus queue trigger function processed message', mySbMsg);
    context.log('EnqueuedTimeUtc =', context.bindingData.enqueuedTimeUtc);
    context.log('DeliveryCount =', context.bindingData.deliveryCount);
    context.log('MessageId =', context.bindingData.messageId);
    context.bindings.outputSbQueue = mySbMsg + " ( OUT ) ";
};

export default serviceBusQueueTrigger;
