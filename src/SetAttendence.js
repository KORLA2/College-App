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

let [data,setdata]=useState([{RollNo:'',Email:'',DM:'',CNS:'',Cloud:''}]);


  useEffect(() => {

    fetchstudents("students");
  }, [rows]);

  let handleChange=(e,idx)=>{
console.log(e.target.value)
let cloned=[...data]
cloned[idx][e.target.name]=e.target.value;
setdata(cloned)

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
                  <TableCell component="th" scope="row">
                    {row.RollNo}
                  </TableCell>

                  <TableCell align="right"> {row.Email} </TableCell>

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
                    name='CNS'
                      onChange={(e) => {
                        handleChange(e, idx);
                      }}
                    />
                  </TableCell>

                  <TableCell>
               
                    <TextField        
                      name='Cloud'
                      onChange={(e) => {
                      
                        handleChange(e, idx);
                      
                      }}/>

                  </TableCell>

<TableCell>
 <Button variant="contained" background="secondary"  onClick={()=>{

setdata([{...data,RollNo:row.ROllNo,Email:row.Email}])
    
 }}>
        Upload Attendence
      </Button>
</TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <CircularProgress />
          )}
        </Table>
      </TableContainer>
     
    </>
  );
};

export default SetAttendence;
