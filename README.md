# Welcome to your CDK TypeScript project!

You should explore the contents of this project. It demonstrates a CDK app with an instance of a stack (`CdkWorkshopStack`)
which contains an Amazon SQS queue that is subscribed to an Amazon SNS topic.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Explore the project directory

* lib/cdk-workshop-stack.ts : is where your CDK application’s main stack is defined. This is the file we’ll be spending most of our time in.
* bin/cdk-workshop.ts : is the entrypoint of the CDK application. It will load the stack defined in lib/cdk-workshop-stack.ts
* package.json is your npm module manifest. It includes information like the name of your app, version, dependencies and build scripts like “watch” and      “build” (package-lock.json is maintained by npm)
* cdk.json: tells the toolkit how to run your app. In our case it will be "npx ts-node bin/cdk-workshop.ts"
* tsconfig.json: your project’s typescript configuration
* .gitignore and .npmignore tell git and npm which files to include/exclude from source control and when publishing this module to the package manager.
* node_modules is maintained by npm and includes all your project’s dependencies.

## Synthesize a template from your app

AWS CDK apps are effectively only a definition of your infrastructure using code. When CDK apps are executed, they produce (or “synthesize”, in CDK parlance) an AWS CloudFormation template for each stack defined in your application.

To synthesize a CDK app, use the cdk synth command.

Info: The CDK CLI requires you to be in the same directory as your cdk.json file. If you have changed directories in your terminal, please navigate back now.

run `cdk synth` 

This template includes four resources:

* AWS::SQS::Queue - our queue
* AWS::SNS::Topic - our topic
* AWS::SNS::Subscription - the subscription between the queue and the topic
* AWS::SQS::QueuePolicy - the IAM policy which allows this topic to send messages to the queue

Info: The AWS::CDK::Metadata resource is automatically added by the toolkit to every stack. It is used by the AWS CDK team for analytics and to allow us to identify versions with security issues.

### CDK DEPLOY

Okay, we’ve got a CloudFormation template. What’s next?

### Bootstrapping an environment

The first time you deploy an AWS CDK app into an environment (account/region), you can install a “bootstrap stack”. This stack includes resources that are used in the toolkit’s operation. For example, the stack includes an S3 bucket that is used to store templates and assets during the deployment process.

You can use the cdk bootstrap command to install the bootstrap stack into an environment:

run `cdk bootstrap` 

Info: You might see an Access Denied error at this step, if the AWS CLI has not been set up correctly or if the active AWS profile does not have the cloudformation:CreateChangeSet permission.

Let’s deploy

Use cdk deploy to deploy a CDK app.

### The CloudFormation Console
CDK apps are deployed through AWS CloudFormation. Each CDK stack maps 1:1 with CloudFormation stack.

This means that you can use the AWS CloudFormation console in order to manage your stacks.

If you select CdkWorkshopStack and open the Resources tab, you will see the physical identities of our resources.



