# ChatGPT on Slack

Lambda function to communicate with ChatGPT (Azure) on Slack.

## Setup Azure OpenAI Service
- Enable and create [Azure OpenAI](https://portal.azure.com/#view/Microsoft_Azure_ProjectOxford/CognitiveServicesHub/~/OpenAI)
  - Resource group will be used part of API endpoint
- Deploy model gpt-35-turbo
  - Model deploy name will be used part of API endpoint

## Deploy serverless resources
- copy [.env-template](./.env-template) to `.env`
  - You don't need to fill in the values for now

```shell
yarn install
yarn deploy --aws-profile <profile>
```

## Setup Slack bot
- Once you deploy the serverless resources, you will get the Lambda function URL
  - e.g. https://xxxxxxxxx.lambda-url.ap-northeast-1.on.aws/
- Copy [slack-app-manifest-template.yaml](./slack-app-manifest-template.yaml) to `slack-app-manifest.yaml`
  - Replace the URL for event subscription with the Lambda function URL
- Create Slack application from [Applications](https://api.slack.com/apps) using the manifest file.
- Install the application to your workspace
- replace secrets in the `.env` file with the values from Slack and OpenAI
- re-deploy the serverless resources