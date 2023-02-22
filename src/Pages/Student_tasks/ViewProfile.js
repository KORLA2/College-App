import React from 'react'

import{Paper,Avatar, Typography} from '@mui/material'
const ViewProfile = ({student,image}) => {


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
      <Typography variant="h4">Name: {student?.data.getStudent.Name}</Typography>

      <Typography variant="h5">ROllNo: {student?.data.getStudent.RollNo}</Typography>
      <Typography variant="h5">Branch : {student?.data.getStudent.Branch}</Typography>
      <Typography variant="h6">Year: {student?.data.getStudent.Year} </Typography>
      <Typography variant="h6">Email:{student?.data.getStudent.Email}</Typography>
      <Typography variant="h6">
      Address:
        {student?.data.getStudent.Address}
      </Typography>
    </Paper>
  ); 
}

export default ViewProfile