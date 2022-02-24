// The main stack
// This is where the meat of our application is:
// As you can see, our app was created with a sample CDK stack (CdkWorkshopStack).
// The stack includes:
//    - SQS Queue (new sqs.Queue)
//    - SNS Topic (new sns.Topic)
//    - Subscribes the queue to receive any messages published to the topic (topic.addSubscription)


import * as cdk from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigw from 'aws-cdk-lib/aws-apigateway';
import { HitCounter } from './hitcounter';
export class CdkWorkshopStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // defines an aws Lambda resource
    const hello = new lambda.Function(this, 'HelloHandler', {
      runtime: lambda.Runtime.NODEJS_14_X, // execution environment
      code: lambda.Code.fromAsset('lambda'), // code loaded from 'lambda' directory
      handler: 'hello.handler' // file is "hello", function is "handler"
    });
    
    const helloWithCounter = new HitCounter(this, 'HelloHitCounter', {
      downstream: hello
    });
    // defines an API Gateway REST API resource backed by our "hello" function. 
    new apigw.LambdaRestApi(this, 'Endpoint', {
      handler: helloWithCounter.handler
    });
  }
}