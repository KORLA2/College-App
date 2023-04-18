import React ,{useState,useEffect}from 'react'
import {Box,Button,Paper,TextField,InputLabel,Select,MenuItem} from '@mui/material'
import {API,graphqlOperation} from 'aws-amplify'
import {listYears,listBranches} from '../../graphql/queries'
import { createSubject } from '../../graphql/mutations'
import Alert from '@mui/material/Alert';

let AddSubjects =()=>{

    let [Years,setYears]=useState([])
    let [Branches, setBranches] = useState([]);
    let [Alerts, setAlerts] = useState(0);

   
let [Subject,setSubject]=useState({});

    async function fetchYear(){
 
        try{
          let x= await API.graphql(graphqlOperation(listYears));
      
      setYears(x.data.listYears.items)
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
      let add=async ()=>{
        console.log('success')

        try{
           await API.graphql(graphqlOperation(createSubject,{input:Subject}))
setAlerts(1);
          }
        catch(err){
        console.log(err)
        }}
        
            
      useEffect(()=>{
      
      
          fetchBranch();
      fetchYear();
      
      
      },[])
console.log(Subject)

return (<Box sx={{height:"100vh",width:"100vw",display:'grid',placeItems:"center",}}>

<Paper elevation={3} sx={{p:4,display:'flex',flexDirection:'column'}} > 
    
{Alerts ?(  
        <Alert severity="success">Successfully Added Subject</Alert>
       ):""}
    <TextField
    variant='outlined'
    label="Subject Name"
    onChange={(e)=>{
setSubject({...Subject,Name:e.target.value});
    }}
    sx={{m:3}}/>
           <InputLabel id="demo-simple-select-label">Branch</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"

          value={Subject.BranchID}
          label="Branch"
          onChange={(e)=>{
setSubject({...Subject,BranchID:e.target.value});
      

          }}
        sx={{m:3}}
        >
       {Branches?.map(e=><MenuItem value={e.Name}>{e.Name}</MenuItem>)
       }
        </Select>
        <InputLabel id="demo-simple-select-label">Year</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"

          value={Subject.YearID}
          label="Year"
          onChange={(e)=>{
setSubject({...Subject,YearID:e.target.value});


          }}
        sx={{m:3}}

        >
       {Years?.map(e=><MenuItem value={e.Name}>{e.Name}</MenuItem>)
       }
        </Select>

    <Button
    variant='contained'
    onClick={add}
    >

        ADD Subject

    </Button>
</Paper>

</Box>)

}
export default AddSubjects