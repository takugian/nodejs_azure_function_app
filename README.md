# nodejs_azure_function_app

- blob_storage_trigger: Blob Storage Trigger
- event_grid_trigger: EventGrid Trigger
- http_trigger: HTTP Trigger
- queue_storage_trigger: Queue Storage Trigger
- service_bus_queue_trigger: Service Bus Queue Trigger
- service_bus_topic_trigger: Service Bus Topic Trigger
- table_storage_in_out: Table Directions In and Out
- timer_trigger: Timer Trigger

## Run locally

```
npm install
npm start
```

## Deploy on Azure

```
npm run build
func azure functionapp publish {function_app_name}
```