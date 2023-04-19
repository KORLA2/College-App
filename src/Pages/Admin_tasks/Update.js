import React,{useEffect,useState} from 'react'
import {useLocation} from 'react-router-dom'
import {Paper,Box,Avatar,Badge,TextField,Button,IconButton} from '@mui/material'
import {getStudent} from '../../graphql/queries'
import {updateStudent} from '../../graphql/mutations'
import {API,graphqlOperation,Storage} from 'aws-amplify'
import UploadIcon from '@mui/icons-material/Upload';
import aws_mobile  from '../../aws-exports'


export default function  Update(){
let location=useLocation();
let [updatedstudent,setupdatedstudent]=useState({});
let [image,setimage]=useState('');
let [image1,setimage1]=useState('');

let update=async ()=>{
try{
  console.log('Trying to update',updatedstudent)

  await API.graphql(graphqlOperation(updateStudent,{input:updatedstudent}))
  console.log('successfully uppdatded')
}
catch(err){
console.log('Error in updating',err)
}

}


async function fetchStudent(){
try{

  let data=await API.graphql(graphqlOperation(getStudent,{RollNo:location.search.substring(8)}))


  setupdatedstudent({BranchID:data.data.getStudent.BranchID,YearID:data.data.getStudent.YearID,Name:data.data.getStudent.Name,RollNo:data.data.getStudent.RollNo,Image:data.data.getStudent.Image})
  const imageurl=await Storage.get(data?.data?.getStudent.Image.key.substring(7),{expires:60})
            
  setimage(imageurl)

}
catch(err){
    console.log('error',err)
}

} 

useEffect(()=>{

    fetchStudent();
  

},[])
useEffect(()=>{
  if(image1)
  uploadtos3()
},[image1])

async function fetchImage(){

try{
  const imageurl=await Storage.get(image1.name,{expires:60})
            
  setimage(imageurl)
}
catch(err){
  console.log('error',err)
}

}



console.log(image1,updatedstudent)
let uploadtos3=()=>{
  Storage.put(image1.name,image1,{

    contentType:'image/png'
    
    }).then(res=>{
    
      let file={
    
        name:image1.name,
    
        file:{
          bucket:aws_mobile.aws_user_files_s3_bucket,
          region:aws_mobile.aws_user_files_s3_bucket_region,
          key:'/public'+image1.name
        }
      
      }
      updatedstudent.Image=file.file
      fetchImage(file.file.key)
    console.log('updated  image')
    }).catch(e=>console.log(e))



}


return (

<Box>
<Paper
      elevation={3}
      sx={{ m: 5, p: 3, display: "grid", placeItems: "center" }}
    >
       
       <Badge
  overlap="circular"
  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
  badgeContent={
<IconButton color="primary" aria-label="upload picture" component="label"

>
  <input hidden accept="image/*" type="file" 
  onChange={(e)=>{
setimage1(e.target.files[0]);

  }}
  />
  <UploadIcon />

</IconButton>
}
  
>
  <Avatar alt="Travis Howard"
  
  sx={{height:200,width:200}}
  src={image} />
</Badge>
 

      <TextField
          required
          id="outlined-required"
          label='Name'
          value={updatedstudent.Name}
          onChange={(e) => setupdatedstudent({ ...updatedstudent, Name:(e.target.value) })}

          defaultValue={updatedstudent.Name}

        />
      <TextField
          id="outlined-disabled"
          label='RollNo'
          sx={{m:1}}

          value={updatedstudent.RollNo}

        />      
        <TextField
        id="outlined-disabled"
        label='Branch'
        value={updatedstudent.BranchID}

        sx={{m:1,p:1}}

      />
         <TextField
          required
          id="outlined-required"
          label='Year'
         
          value={updatedstudent.YearID}
          onChange={(e) => setupdatedstudent({ ...updatedstudent, YearID:(e.target.value) })}
          defaultValue={updatedstudent.YearID}

        />
     
     
<Button variant="contained" onClick={update} >
    Update Student
    </Button>
    </Paper>

    </Box>
)

}