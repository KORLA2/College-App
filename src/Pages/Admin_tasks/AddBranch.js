import React, { useEffect, useState } from 'react'
import {Paper, TextField,Box, Button} from '@mui/material'
import {createBranch} from "../../graphql/mutations"
import {API,graphqlOperation} from 'aws-amplify'
import { listBranches} from '../../graphql/queries'

const Addyear =()=>{

let [BranchID,setBranchID]=useState('');
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
    let x=await API.graphql(graphqlOperation(createBranch,{input:{BranchID:BranchID}}));
console.log("success" +x)

}
catch(err){
    console.log(err)
}

}

    return (

    
    <Box sx={{height:"100vh",width:"100vw",display:'grid',placeItems:"center",}}>

    <Paper elevation={3} sx={{p:4,display:'flex',flexDirection:'column'}} > 
        <TextField
        variant='outlined'
        label="Add Branch ID"
        onChange={(e)=>{
setBranchID(e.target.value)
        }}
        sx={{m:3}}/>
              <TextField
        variant='outlined'
        label="Add Branch"
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