import React ,{useEffect,useState}from 'react'
import * as AWS from 'aws-sdk'
import{Paper} from '@mui/material'



let ViewAttendance=()=>{

let [student,setstudent]=useState([]);
let [RollNo,setRollNo]=useState('');



useEffect(()=>{

setRollNo(JSON.parse(localStorage.getItem("student")).data.getStudent.RollNo)

},[])

var docClient = new AWS.DynamoDB.DocumentClient({apiVersion: '2012-08-10'});


  useEffect(()=>{
    if(RollNo){
    var params = {
      TableName: 'Attendance',
      Key:  RollNo
     };
     
     docClient.scan(params, function(err, data) {
       if (err) {
         console.log("Error", err);
       } else {
         setstudent(data.Items.find(e=>e.RollNo===RollNo))
       }
     });
     
    }
  },[RollNo])

  console.log(RollNo,student)
    return <Paper
    elevation={3}
    sx={{ m: 5, p: 3, display: "grid", placeItems: "center" }}
  >

{
Object.entries(student)?.map(e=>
  
  <h1>{e[0]}:{e[1]}</h1>
  )

}
 </Paper>
}
export default ViewAttendance





