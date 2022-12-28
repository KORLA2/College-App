
import  React ,{useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import AppBarTemplate from './AppBarTemplate'

import * as AWS from "aws-sdk";



const Attendence = ({Email}) => {
  let [rows, setrows] = useState([]);


  const docClient = new AWS.DynamoDB.DocumentClient();

  const fetchstudents = (tableName) => {
    var params = {
      TableName: tableName,
    };

    docClient.scan(params, function(err, data) {
      if (!err) {
      for(let i=0;i<data.Items.length;++i)
      if(Email===data.Items[i].Email){setrows([data.Items[i]])
      return ;
      }
      }
    });
  };

useEffect(() => {
  fetchstudents("Attendance")

  
  
}, [rows.length]);
console.log(rows)
return (
    <>

<AppBarTemplate/>
 <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">CNS</TableCell>
            <TableCell align="right"> DM</TableCell>
            <TableCell align="right">Cloud</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.RollNo}
              </TableCell>
              <TableCell align="right">{row.CNS}</TableCell>
              <TableCell align="right">{row.Cloud}</TableCell>
              <TableCell align="right">{row.DM}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>

  );
}

export default Attendence


