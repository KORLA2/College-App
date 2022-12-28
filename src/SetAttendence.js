import React, { useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";
import {Button,TextField } from '@mui/material'
import AWS from "aws-sdk";

const SetAttendence = () => {

  let [rows, setrows] = useState([]);
let [index,setindex]=useState(0)
  const docClient = new AWS.DynamoDB.DocumentClient();

  const fetchstudents = (tableName) => {
    var params = {
      TableName: tableName,
    };

    docClient.scan(params, function(err, data) {
      if (!err) {
        rows = data.Items.map((e) => e);
        setrows(rows);
      }
    });
  };

let [data, setdata] = useState([
  { RollNo: 0, Email: "", DM: "", CNS: "", Cloud: "" },
  { RollNo: 0, Email: "", DM: "", CNS: "", Cloud: "" },
  { RollNo: 0, Email: "", DM: "", CNS: "", Cloud: "" },
  { RollNo: 0, Email: "", DM: "", CNS: "", Cloud: "" },
  { RollNo: 0, Email: "", DM: "", CNS: "", Cloud: "" },
  { RollNo: 0, Email: "", DM: "", CNS: "", Cloud: "" },
]);


  useEffect(() => {

    fetchstudents("students");
   
    if(rows.length){


    setdata( data.map((e,idx)=>{console.log(idx);  

     return  {...e,RollNo:Number(rows[idx].RollNo),Email:rows[idx].Email};

      })) 
    
    }
  }, [rows.length]);


  let handleChange=(e,idx)=>{

 console.log(e.target.value)

let cloned=[...data]

cloned[idx][e.target.name]=e.target.value;

setdata(cloned)

  }

  let setchange=(e,idx)=>{

let cloned = [...data];


cloned[idx][e.target.name]=e.target.text

setdata(cloned);

  }
  console.log(data)

function putData(table, data) {

data.forEach((e)=>{


console.log(e)
let params = {
  TableName: table,
  Item:e
};
docClient.put(params, function(err, e) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", e);
  }

  
})
  
})
}

console.log(data)

  return (
    <>
      <h3>Manage Attendence</h3>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>

            <TableRow>

              <TableCell>RollNo</TableCell>

              <TableCell align="center">Email</TableCell>

              <TableCell align="center">DM</TableCell>

              <TableCell align="center">CNS</TableCell>

              <TableCell align="center">Cloud</TableCell>
            </TableRow>
          </TableHead>
          {rows.length ? (
            <TableBody>
              {rows.map((row, idx) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell
                    component="th"
                    scope="row"
                   name="RollNo"
                  >
                    {row.RollNo}
                  </TableCell>

                  <TableCell
                    align="right"
         
                  >
                    {row.Email}
                  </TableCell>

                  <TableCell align="right">

                    <TextField
                      name="DM"
                      
                      onChange={(e) => {
                        handleChange(e, idx);
                      }}
                    />

                  </TableCell>

                  <TableCell align="right">

                    <TextField
                      name="CNS"
                      onChange={(e) => {
                        handleChange(e, idx);
                      }}
                    />

                  </TableCell>

                  <TableCell>
                    <TextField
                      name="Cloud"
                      onChange={(e) => {
                        handleChange(e, idx);
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <CircularProgress />
          )}
        </Table>
      </TableContainer>
      <Button
       
        variant="contained"
       
        background="secondary"
       
        onClick={async () => {

          await putData("Attendance", data);
        }}
      >
        Upload Attendence
      </Button>
    </>
  );
};

export default SetAttendence;
