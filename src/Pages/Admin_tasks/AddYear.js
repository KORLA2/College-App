import React, { useEffect, useState } from 'react'
import {Paper, TextField,Box, Button} from '@mui/material'
import {createYear} from "../../graphql/mutations"
import {API,graphqlOperation} from 'aws-amplify'
import { listBranches } from '../../graphql/queries'

const Addyear =()=>{
    
    let [year,setyear]=useState('')

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
    let x=await API.graphql(graphqlOperation(createYear,{input:{YearID:year}}));
console.log("success"+x )

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
        label="Add year"
        onChange={(e)=>{
setyear(e.target.value)
        }}
        sx={{m:3}}/>
        <Button
        variant='contained'
        onClick={add}
        >

            ADD YEAR
        </Button>
    </Paper>

    </Box>)
}
export default Addyear;