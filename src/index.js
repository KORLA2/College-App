import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import * as AWS from 'aws-sdk'

import { ConfigurationOptions } from 'aws-sdk'

const configuration={
    region: 'ap-south-1',
    secretAccessKey: 'TGHmPl+j0hiEH2kHwO6SQHkHHRCZGoFTkoA2pIZU',
    accessKeyId: 'AKIAVUZGXF7V4TZ2LQFR',
}

AWS.config.update(configuration)



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <App />

);
