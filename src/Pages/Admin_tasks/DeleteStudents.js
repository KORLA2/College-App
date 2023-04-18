import React,{useState,useEffect} from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import {studentsByYearID} from '../../graphql/queries'
import {API,graphqlOperation} from 'aws-amplify'
import {deleteStudent} from '../../graphql/mutations'
import { Button, Typography } from '@mui/material';
const columns = [
  { field: 'id', headerName: 'RollNo', width: '100', },
  {
    field: 'Name',
    headerName: 'Name',
    width: '100'
  },
 
  {
    field: 'Branch',
    headerName: 'Branch',
    type: 'String',
    width: '100'
  
  },
  {
    field: 'Year',
    headerName: 'Year',
   width:'100'
  },
];


export default function DataGridDemo() {
  const [rows,setrows]=useState([]);
  const [rowSelectionModel, setRowSelectionModel] = useState([]);
useEffect(()=>{
    let fetchstudents=async ()=>{
        try{
      
        
      let x= await API.graphql(graphqlOperation(studentsByYearID,{YearID:"4"}))
      console.log(x)
      let data=x.data.studentsByYearID.items.map((e,idx)=>{
      return {Name:e.Name,id:e.RollNo,Year:e.YearID,Branch:e.BranchID}
    })
    setrows(data)
        }
        catch(er){console.log(er)}
      }
fetchstudents()

},[])

const deleteStudents= ()=>{

  rowSelectionModel.map(e=>(

    deleteStu(e)
  ))

let deleteStu=async (e)=>{

try{
 await API.graphql(graphqlOperation(deleteStudent,{input:{RollNo:e}}))
 console.log('Deletion Successful')

}
catch(err){
  console.log("errorindeleting" , err)
}

}

}


  return (
    <Box sx={{ height: 400, width: '100%' }}>
      <Typography variant='body2'>
        Delete Students
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
      

        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(...rowSelectionModel,newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        checkboxSelection
        
        disableRowSelectionOnClick

      />
<Button variant='contained' color='primary' onClick={deleteStudents} >Delete Students</Button>
    </Box>
  );
}