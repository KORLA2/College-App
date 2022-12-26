import React from 'react'
import  { Amplify } from "aws-amplify";

import {  withAuthenticator } from "@aws-amplify/ui-react";
import awsconfig from "./aws-exports";

Amplify.configure(awsconfig);


const AmplifyAuth = () => {
  return (
    <div>AmplifyAuth</div>
  )
}

export default withAuthenticator(AmplifyAuth);