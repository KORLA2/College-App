import React,{useEffect,useState} from 'react'
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";


import  AWS from 'aws-sdk'


const TotalStudents = () => {
  let [rows,setrows]=useState([])


const docClient = new AWS.DynamoDB.DocumentClient()

 const fetchstudents = (tableName) => {
    var params = {
        TableName: tableName
    }

    docClient.scan(params, function (err, data) {
        if (!err) {

rows=data.Items.map(e=>e);
setrows(rows)
        }
    })
}
console.log(rows)

useEffect(()=>{

fetchstudents('students');

},[rows])

  
  return (
    <>
      <h3>Total Students</h3>
      <TableContainer component={Paper}>
      
      
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>RollNo</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Branch</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Year</TableCell>
            </TableRow>
          </TableHead>
      {

      
        rows.length?  <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.RollNo}
                </TableCell>

                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.Branch}</TableCell>
                <TableCell align="right">{row.Email}</TableCell>
                <TableCell align="right">{row.Year}</TableCell>
              </TableRow>
            ))}
          </TableBody> : <CircularProgress />

      }
        </Table>
      </TableContainer>
    </>
  );
}

export default TotalStudents




