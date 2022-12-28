import React ,{useState,useEffect}from 'react'
import { Grid, TextField,Button } from '@mui/material';

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Paper from "@mui/material/Paper";
import Draggable from 'react-draggable';
import * as AWS from 'aws-sdk'


import {API,graphqlOperation}  from 'aws-amplify'
import {listRegisters} from './graphql/queries.js'

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}



const RegisterStudents = () => {

let [data,setdata]=useState({name:'',RollNo:0,Email:'',Year:'',Branch:""});
let [students,setstudents]=useState([]);


const docClient = new AWS.DynamoDB.DocumentClient()

 const fetchstudents = (tableName) => {
    var params = {
        TableName: tableName
    }

    docClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data)
        }
    })
}


useEffect(()=>{

fetchstudents('students');

},[])


function putData(table,data){
let params={

  TableName:table,
  Item:data,
  
}

 
    docClient.put(params, function(err, data) {
      if (err) {
        console.log("Error", err);
      } else {
        console.log("Success", data);
      }
    });

}


let userTable='students'

  return (
    <form>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
          <TextField
            onChange={(e) => {
              setdata({ ...data, name: e.target.value });
            }}
            id="outlined-basic"
            label="Name"
            required
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(e) => {
              setdata({ ...data, RollNo: Number(e.target.value) });
            }}
            id="outlined-basic"
            label="RollNo"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            onChange={(e) => {
              setdata({ ...data, Email: e.target.value });
            }}
            id="outlined-basic"
            label="Email-ID"
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Year"
            onChange={(e) => {
              setdata({ ...data, Year: e.target.value });
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="outlined-basic"
            label="Branch"
            onChange={(e) => {
              setdata({ ...data, Branch: e.target.value });
            }}
            variant="outlined"
          />
        </Grid>

        <Grid item xs={6}>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            onClick={async () => {
              console.log(typeof data.RollNo);
              await putData("students", data);
            }}
          >
            Register
          </Button>
         
        </Grid>
      </Grid>
    </form>
  );
}

export default RegisterStudents



