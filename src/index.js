import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// STARTS HERE
import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

const configuration={
    region: 'ap-south-1',
    secretAccessKey: '',
    accessKeyId: ''
}

AWS.config.update(configuration)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
