import React, { useState, useEffect } from "react";
import {Box,Button, TextField} from '@mui/material'
import {API,Storage,graphqlOperation} from 'aws-amplify'
import {createStudent} from '../../graphql/mutations'
import aws_mobile  from '../../aws-exports'
import {v4 as uuid} from 'uuid'
function Addstudent({ setislogged }) {
  let [student,setstudent]=useState({id:uuid(),RollNo:0,Name:'',Email:'',Branch:'',Year:0,Address:''})
 let [image,setimage]=useState([]);

async function DynamoDB(file){
try{

  await API.graphql(graphqlOperation(createStudent,{input:student}));


}
catch(err){console.log(err)}

}



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
    <Box sx={{}}>
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
        onChange={(e) => setstudent({ ...student, RollNo: Number([e.target.value] )})}
      />
      <TextField
        variant="outlined"
        value={student.Email}
        onChange={(e) => setstudent({ ...student, Email: e.target.value})}
        label="Email"
      />
      <TextField
        variant="outlined"
        onChange={(e) => setstudent({ ...student, Branch: String([e.target.value])})}
        value={student.Branch}
        label="Branch"
      />
      <TextField
        variant="outlined"
        onChange={(e) => setstudent({ ...student, Year:Number([e.target.value]) })}
        value={student.Year}
        label="Year"
      />
      <TextField
        variant="outlined"
        value={student.Address}
        onChange={(e) => setstudent({ ...student, Address: String([e.target.value] )})}
        label="Address"
      />
      <TextField
        variant="outlined"
        value={student.Name}
        onChange={(e) => setstudent({ ...student, Name: String([e.target.value]) })}
        label="Name"
      />

      <Button onClick={RegisterStudent}>Add Student</Button>
    </Box>
  );
}

export default Addstudent;
