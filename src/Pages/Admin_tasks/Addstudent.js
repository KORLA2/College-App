import React, { useState, useEffect } from "react";
import {Box,Paper,Button, TextField,MenuItem,Select,InputLabel} from '@mui/material'
import {API,Storage,graphqlOperation} from 'aws-amplify'
import {createStudent} from '../../graphql/mutations'
import {listYears,listBranches} from '../../graphql/queries'
import aws_mobile  from '../../aws-exports'
import Alert from '@mui/material/Alert';

function Addstudent({ setislogged }) {
let [student,setstudent]=useState({Name:'',RollNo:'',BranchID:'',YearID:''})
 let [image,setimage]=useState([]);
let [year,setYear]=useState('')
let [Years,setYears]=useState([])
let [branch, setBranch] = useState("");
let [Branches, setBranches] = useState([]);
let [Alerts,setAlerts]=useState(0);

async function DynamoDB(file){
try{

  await API.graphql(graphqlOperation(createStudent,{input:student}));

  setAlerts(1)

}
catch(err){console.log(err)}

}

async function fetchYear(){
 
  try{
    let x= await API.graphql(graphqlOperation(listYears));

setYears(x.data.listYears.items)

console.log(x)

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


fetchYear();
fetchBranch();


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
    <Box sx={{height:"100vh",width:"100vw",display:'grid',placeItems:"center",}}>

<Paper elevation ={3} sx={{p:4,display:'flex',flexDirection:'column'}} >
      
       {Alerts ?(  
        <Alert severity="success">Successfully Added Student</Alert>
       ):""}
      <input
        type="file"
        onChange={(e) => {
       
  
          setimage(e.target.files[0]);
          
        }}
        sx={{m:4}}

      />
      <TextField
        variant="outlined"
        label="RollNO"
        value={student.RollNo}
        sx={{m:4}}
        onChange={(e) => setstudent({ ...student, RollNo:(e.target.value) })}
      />
      <InputLabel id="demo-simple-select-label">Branch</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"

          value={branch}
          label="Branch"
          onChange={(e)=>{
            setBranch(e.target.value)
            setstudent({ ...student, BranchID:(e.target.value)})

          }}
        >
       {Branches?.map(e=><MenuItem value={e.Name}>{e.Name}</MenuItem>)
       }
        </Select>
   
    
      <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={year}
          label="Year"
          onChange={(e)=>{
            setYear(e.target.value)
            setstudent({ ...student, YearID:(e.target.value)})


          }}
        >  {Years?.map(e=><MenuItem value={e.Name}>{e.Name}</MenuItem>)
      }
        
        </Select>
   
      <TextField
        variant="outlined"
        value={student.Name}
        sx={{m:4}}

        onChange={(e) => setstudent({ ...student, Name:(e.target.value) })}
        label="Name"
      />

      <Button
      variant="contained"
      sx={{m:4}}
      onClick={RegisterStudent}>Add Student</Button>
   </Paper>
    </Box>

  );
}

export default Addstudent;
