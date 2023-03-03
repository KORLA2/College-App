import React, { useState, useEffect } from "react";
import {Box,Paper,Button, TextField,MenuItem,Select,InputLabel} from '@mui/material'
import {API,Storage,graphqlOperation} from 'aws-amplify'
import {createStudent} from '../../graphql/mutations'
import {listYears,listBranches} from '../../graphql/queries'
import aws_mobile  from '../../aws-exports'
import {v4 as uuid} from 'uuid'
function Addstudent({ setislogged }) {
  let [student,setstudent]=useState({RollNo:'',Name:'',BranchID:'',YearID:''})
 let [image,setimage]=useState([]);
let [year,setYear]=useState('')
let [branch, setBranch] = useState("");
async function DynamoDB(file){
try{

  await API.graphql(graphqlOperation(createStudent,{input:student}));


}
catch(err){console.log(err)}

}

useEffect(()=>{


 async function fetchYear(){
  try{
    
let x= await API.graphql(graphqlOperation(listYears));

console.log(x)
  }
  catch(er){
console.log(er)
  }

}
fetchYear()
async function fetchBranch(){
  
try{
let y=await API.graphql(graphqlOperation(listBranches))
console.log(y)
}
catch(err){
console.log(err)
}
}
fetchBranch()

},[])

function RegisterStudent(e) {

Storage.put(image.name,image,{

contentType:'image/png'

}).then(res=>{

  let file={

    name:image.name,

    file:{
      bucket:aws_mobile.aws_user_files_s3_bucket,
      region:aws_mobile.aws_user_files_s3_bucket_region,
      key:'/public'+image.name
    }
  
  }
  student.Image=file.file
DynamoDB();
console.log('successfully ')
}).catch(e=>console.log(e))

  }
  console.log(student)

  return (
    <Box>

<Paper elevation ={3}>
      <input
        type="file"
        onChange={(e) => {
       
  
          setimage(e.target.files[0]);
        }}
      />
      <TextField
        variant="outlined"
        label="RollNO"
        value={student.RollNo}
        onChange={(e) => setstudent({ ...student, RollNo: [e.target.value] })}
      />
      <InputLabel id="demo-simple-select-label">Branch</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={branch}
          label="Branch"
          onChange={(e)=>{
            setBranch(e.target.value)
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
   
    
      <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Year"
          onChange={(e)=>{
            setYear(e.target.value)
          }}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
   
      <TextField
        variant="outlined"
        value={student.Name}
        onChange={(e) => setstudent({ ...student, Name: String([e.target.value]) })}
        label="Name"
      />

      <Button onClick={RegisterStudent}>Add Student</Button>
   </Paper>
    </Box>

  );
}

export default Addstudent;
