# nodejs_azure_function_app

- http_trigger: HTTP Trigger
- queue_storage_trigger: Queue Storage Trigger

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