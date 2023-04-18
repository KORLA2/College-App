import React ,{useEffect,useState}from 'react'

import{Paper,Avatar, Typography} from '@mui/material'
const ViewProfile = ({image}) => {
let [student,setstudent]=useState([]);
console.log(image)
useEffect(()=>{

 setstudent(JSON.parse(localStorage.getItem("student")))

  
// setimage(localStorage.getItem("imageurl"));

},[])

  return (
    <Paper
      elevation={3}
      sx={{ m: 5, p: 3, display: "grid", placeItems: "center" }}
    >
      <Avatar
        alt="Remy Sharp"
        src={image}
        sx={{ width: 200, height: 200, border: "2px solid black" }}
      />
      <Typography variant="h4">Name: {student?.data?.getStudent?.Name}</Typography>

      <Typography variant="h5">RollNo: {student?.data?.getStudent?.RollNo}</Typography>
      <Typography variant="h5">Branch : {student?.data?.getStudent?.BranchID}</Typography>
      <Typography variant="h5">Year : {student?.data?.getStudent?.YearID}</Typography>
     
    
    </Paper>
  ); 
}

export default ViewProfile