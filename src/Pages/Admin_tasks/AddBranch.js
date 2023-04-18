import React, { useEffect, useState } from 'react'
import {Paper, TextField,Box, Button} from '@mui/material'
import {createBranch} from "../../graphql/mutations"
import {API,graphqlOperation} from 'aws-amplify'
import { listBranches} from '../../graphql/queries'
import Alert from '@mui/material/Alert';
const Addyear =()=>{


let [BranchID,setBranchID]=useState('');
let [Alerts,setAlerts]=useState(0);
let fetch=async ()=>{

try{

    let x= await API.graphql(graphqlOperation(listBranches))
   
    console.log(x)

}
catch(er){console.log(er)}

}

    useEffect(()=>{
   
        fetch()
    },[])

let add= async()=>{
    console.log('appli')
try{
    let x= await API.graphql(graphqlOperation(createBranch,{input:{Name:BranchID}}));
console.log("success" +x)

setAlerts(1);

}
catch(err){
    console.log(err)
}

}

    return (

    
    <Box sx={{height:"100vh",width:"100vw",display:'grid',placeItems:"center",}}>

    <Paper elevation={3} sx={{p:4,display:'flex',flexDirection:'column'}} > 
       
{Alerts?(<Alert severity="success">Successfully Added Branch</Alert>):""}
        <TextField
        variant='outlined'
        label="Add Branch Name"
        onChange={(e)=>{
setBranchID(e.target.value)
        }}
        sx={{m:3}}/>
            
        <Button
        variant='contained'
        onClick={add}
        >

            ADD Branch

        </Button>
    </Paper>

    </Box>)
}
export default Addyear;