#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkWorkshopStack } from '../lib/cdk-workshop-stack';

const app = new cdk.App();
new CdkWorkshopStack(app, 'CdkWorkshopStack');

// Your app’s entry point
// This code loads and instantiates the CdkWorkshopStack class from the lib/cdk-workshop-stack.ts file.
// We won’t need to look at this file anymore.