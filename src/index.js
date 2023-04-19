import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import aws_mobile from './aws-exports'
import * as AWS from 'aws-sdk'
const configuration={
    region: 'ap-south-1',
    secretAccessKey: aws_mobile.aws_secret_key,
    accessKeyId: aws_mobile.aws_access_id,
}

AWS.config.update(configuration)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
