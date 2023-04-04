# ChatGPT on Slack

Lambda function to communicate with ChatGPT on Slack.

### How to setup Slack bot

- Create Slack application from [Applications](https://api.slack.com/apps) using [manifest file](./slack-app-manifest.yaml)
- Install the application to your workspace

### How to deploy

```shell
npm install -g aws-sso-creds-helper
ssocreds -p <profile>
```

```shell
yarn deploy:dev --aws-profile <profile>
```