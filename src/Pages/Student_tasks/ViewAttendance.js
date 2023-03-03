import React ,{useEffect,useState}from 'react'
import * as AWS from 'aws-sdk'
import{Paper,Avatar, Typography} from '@mui/material'



let ViewAttendance=({RollNo})=>{
console.log(RollNo)
let [student,setstudent]=useState([]);

  const docClient = new AWS.DynamoDB.DocumentClient();

  useEffect(()=>{


    var params = {
        TableName: "Attendance",
        Key: {
            RollNo:{N: RollNo},
          },
    }
    
    docClient.scan(params,  (err, data) =>{
        if (!err) {
     setstudent(data.Items)
        }
    })
    

  },[])
    return <Paper
    elevation={3}
    sx={{ m: 5, p: 3, display: "grid", placeItems: "center" }}
  >

  {
    student?.map(e=>{
if(e.RollNo==RollNo){
    return (

        <h1>e.Branch</h1>
    )
}

    }

        
    )
  }

  </Paper>
}
export default ViewAttendance
