# ChatGPT on Slack

Lambda function to communicate with ChatGPT on Slack.

### How to deploy

```shell
npm install -g aws-sso-creds-helper
ssocreds -p <profile>
```

```shell
yarn deploy:dev --aws-profile <profile>
```

### How to setup Slack bot

- Create Slack application from [Applications](https://api.slack.com/apps) using [manifest file](./slack-app-manifest-template.yaml)
  - put the URL of API Gateway
- Install the application to your workspace
- replace secrets in [.env](./.env) with the values from Slack application