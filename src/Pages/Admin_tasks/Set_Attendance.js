import React, { useEffect,useState } from 'react'
import {API,Storage,graphqlOperation} from 'aws-amplify'
import {Box,TextFeild,Select,InputLabel,MenuItem,Button, Paper,} from '@mui/material'
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import  { TableCell,tableCellClasses,TextField } from '@mui/material';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import * as AWS from 'aws-sdk'
import { subjectsByBranchIDAndYearID,studentsByBranchIDAndYearID,listYears,listBranches } from '../../graphql/queries'
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
    border: 0,
  },
}));
const Set_Attendance = () => {
  const docClient = new AWS.DynamoDB.DocumentClient()
  let [year,setYear]=useState('')
  let [Years,setYears]=useState([])
  let [branch, setBranch] = useState("");
  let [Name, setName] = useState("");
  let [Branches, setBranches] = useState([]);
let [subjects,setsubjects]=useState([])


let [Attendance,setAttendance]=useState([{}])

  let [students,setstudents]=useState([]);


let upload= async ()=>{
  Attendance.forEach(e=>{
    let params={
      TableName:"Attendance",
      Item:e
      
      }
       docClient.put(params,(e,d)=>{
        if(e)console.log(e)
        else console.log(d)
        })
        
         
  })
 


}

let fetchsubjects=async ()=>{
  try{

  
let x= await API.graphql(graphqlOperation(subjectsByBranchIDAndYearID,{BranchID:branch,YearID:{eq:year}}))

setsubjects(x.data.subjectsByBranchIDAndYearID.items);

  }
  catch(er){console.log(er)}
}
let fetchstudents=async ()=>{
  try{

  
let x= await API.graphql(graphqlOperation(studentsByBranchIDAndYearID,{BranchID:branch,YearID:{eq:year}}))
setstudents(x.data.studentsByBranchIDAndYearID.items)
console.log(x.data.studentsByBranchIDAndYearID)
let data=x.data.studentsByBranchIDAndYearID.items.map((e,idx)=>{
return {Name:e.Name,RollNo:e.RollNo,Year:e.YearID,Branch:e.BranchID}

})
setAttendance(data)
  }
  catch(er){console.log(er)}
}
console.log(Attendance)
async function fetchYear(){
 
  try{
    let x= await API.graphql(graphqlOperation(listYears));

setYears(x.data.listYears.items)

  }
  catch(er){

console.log(er)

  }

}
async function fetchBranch(){
 
  try{
    let x= await API.graphql(graphqlOperation(listBranches));
    setBranches(x.data.listBranches.items)


  }
  catch(er){

console.log(er)

  }

}

  useEffect(()=>{

fetchYear()
fetchBranch()

  },[])
  return (
  <Box sx={{height:"100vh",width:"100vw"}} >
<Paper elevation={4} sx={{display:"flex", p:3 ,m:5}}>
<div>


<InputLabel id="demo-simple-select-label">Branch</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
value={branch}
          label="Branch"
          onChange={(e)=>{
      
setBranch(e.target.value)
          }}
        sx={{m:3}}
        >
       {
       Branches?.map(e=><MenuItem value={e.Name}>{e.Name}</MenuItem>)
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
      
setYear(e.target.value)
          }}
        sx={{m:3}}
        >
       {Years?.map(e=><MenuItem value={e.YearNo}>{e.YearNo}</MenuItem>)
       }
        </Select>
</div>

<Button variant="contained"  onClick={()=>{
  fetchstudents();
  fetchsubjects();
}}>
  fetch
</Button>
</Paper>
<TableContainer  sx={{m:3}}component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>RollNo </StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Branch</StyledTableCell>
            <StyledTableCell align="right">Year</StyledTableCell>
         { 
          subjects?.map(e=>
            <StyledTableCell align="right">{e.SubjectName}</StyledTableCell>
            
            
            )
         }
          </TableRow>
        </TableHead>
        <TableBody>
          {students?.map((row,idx) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.RollNo}
              </StyledTableCell>
              <StyledTableCell align="right">{row.Name}</StyledTableCell>
              <StyledTableCell align="right">{row.BranchID}</StyledTableCell>
              <StyledTableCell align="right">{row.YearID}</StyledTableCell>
             
             {
              subjects?.map((e)=>
              <StyledTableCell align="right">
                <TextField variant="outlined"   onChange={(p)=>{
                  let x=Attendance[idx]
                  x={...x,[e.SubjectName]:p.target.value};
                  
                  Attendance.splice(idx,1)

                  console.log(x)
            setAttendance([x,...Attendance]);
            
            }}/>
              </StyledTableCell>

                )
             }
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
<Button  onClick={upload} sx={{ position:"absolute",right:"0%",m:3}}variant="contained">
 
  Upload Attendance

</Button>
  </Box>


  )
}

export default Set_Attendance