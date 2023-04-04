import { App, AwsLambdaReceiver } from "@slack/bolt"
import {
  AwsCallback,
  AwsEvent,
} from "@slack/bolt/dist/receivers/AwsLambdaReceiver"
import Lambda from "aws-lambda"

const receiver = new AwsLambdaReceiver({
  signingSecret: process.env.SLACK_SIGNING_SECRET ?? "",
})

const app = new App({
  token: process.env.SLACK_BOT_USER_OAUTH_TOKEN,
  receiver,
})

app.event("app_mention", async ({ event, say }) => {
  try {
    const { channel, event_ts } = event
    await say({
      channel,
      thread_ts: event_ts,
      text: "Hello World!",
    })
  } catch (error) {
    console.error(error)
  }
})

export async function main(
  event: AwsEvent,
  context: Lambda.Context,
  callback: AwsCallback
): Promise<Lambda.APIGatewayProxyResult> {
  const handler = await receiver.start()
  return handler(event, context, callback)
}
