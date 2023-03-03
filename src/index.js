import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// STARTS HERE
import * as AWS from 'aws-sdk'
import { ConfigurationOptions } from 'aws-sdk'

const configuration={
    region: 'ap-south-1',
    secretAccessKey: 'y0Rs83WvttQMS21pcbH/TO3PkiDubOB+i5lxAhMh',
    accessKeyId: 'AKIAVUZGXF7VTG3TDZO7'
}

AWS.config.update(configuration)

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);