import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {

    context.log('HTTP trigger function processed a request.');

    context.log('Person entity name: ' + context.bindings.personEntity.name);

    context.bindings.tableBinding = [];

    context.bindings.tableBinding.push({
        PartitionKey: "pk",
        RowKey: context.bindings.personEntity.id,
        Name: context.bindings.personEntity.name
    });

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: `Person ${context.bindings.personEntity.id} created`
    };

};

export default httpTrigger;