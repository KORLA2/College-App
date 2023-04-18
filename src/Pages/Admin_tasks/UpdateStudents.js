import React,{useState,useEffect} from 'react'
import {Box,Paper,Select,MenuItem,InputLabel,Button} from '@mui/material';
import {API,graphqlOperation} from 'aws-amplify';
import {listBranches,listYears,studentsByBranchIDAndYearID} from '../../graphql/queries'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import  { TableCell,tableCellClasses,TextField } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {useNavigate} from 'react-router-dom'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0
    },
  }));
 let UpdateStudents=()=>{
let [year,setyear]=useState([]);
let [branch,setbranch]=useState([]);
let [years,setyears]=useState([]);
let [branches,setbranches]=useState([]);
let [students,setstudents]=useState([]);
let navigate=useNavigate();

let fecthYears=async ()=>{

 try{

    let x= await API.graphql(graphqlOperation(listYears));

    setyears(x.data.listYears.items)
 }
 catch(err){
console.log('error',err)

 }

}

let fetchstudents=async ()=>{
    try{
  
    
  let x= await API.graphql(graphqlOperation(studentsByBranchIDAndYearID,{BranchID:branch,YearID:{eq:year}}))
  setstudents(x.data.studentsByBranchIDAndYearID.items)
  console.log(x.data.studentsByBranchIDAndYearID)
  let data=x.data.studentsByBranchIDAndYearID.items.map((e,idx)=>{
  return {Name:e.Name,RollNo:e.RollNo,Image:e.Image.key}
  
  })
  setstudents(data);
    }
    catch(er){console.log(er)}
  }

async function fetchBranches(){
 
    try{
      let x= await API.graphql(graphqlOperation(listBranches));
      setbranches(x.data.listBranches.items)
  
  
    }
    catch(er){
  
  console.log(er)
  
    }
  
  }

useEffect(()=>{

fetchBranches();
fecthYears();

},[])

return (
<Box
sx={{p:2,m:3}}>

<Paper elevation={4} sx={{display:"flex", justifyContent:'space-around',p:3 ,m:5}}>
<div>

<InputLabel id="demo-simple-select-label">Branch</InputLabel>

        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
value={branch}
          label="Branch"
          onChange={(e)=>{
      
setbranch(e.target.value)
          }}
        sx={{m:3}}
        >
       {
       branches?.map(e=><MenuItem value={e.Name}>{e.Name}</MenuItem>)
       }
        </Select>
</div>
<div>
<InputLabel id="demo-simple-select-label">Year</InputLabel>


<Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
value={year}
          label="Year"
          onChange={(e)=>{
      
setyear(e.target.value)

          }}
        sx={{m:3}}
        >
       {years?.map(e=><MenuItem value={e.Name}>{e.Name}</MenuItem>)
       }
        </Select>
</div>

<Button variant="contained" size='small'  onClick={()=>{
  fetchstudents();
}}>
  fetch
</Button>
</Paper>


<TableContainer  sx={{m:3}}component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>RollNo </StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Photo</StyledTableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {students?.map((row,idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell component="th" scope="row">
                {row.RollNo}
              </StyledTableCell>
              <StyledTableCell align="center">{row.Name}</StyledTableCell>
              <StyledTableCell align="center">{row.Image}</StyledTableCell>
             
              <StyledTableCell align="center"
              >
                <Button
              variant='contained'
              onClick={()=>{
                navigate(`/admin/Update Student?RollNo=${row.RollNo}`);
              }}
              >
                Update Student

                </Button></StyledTableCell>
          
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>


</Box>
)


}
export default UpdateStudents