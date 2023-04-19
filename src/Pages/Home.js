import * as React from "react";
import AppBar from "@mui/material/AppBar";
import {Box,Paper,Avatar,Button} from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import logo from './logo.png'
import './background.css'
const Home = () => {



  return <Box sx={{ flexGrow: 1 }} >
    
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <Avatar
                    alt="Remy Sharp"
                    src={logo}
                    sx={{ width: 50, height: 50, border: "2px solid black" }}
            />

         
          </IconButton>
          <Typography variant="h6" component="div" sx={{ color: 'black',textAlign:'center',flexGrow: 1 }}>
           JNTUH-CEJ
          </Typography>

        </Toolbar>
      </AppBar>

      <Paper elevation ={3} sx={{p:4,display:'flex',flexDirection:'column',m:5,alignItems:"center"}} >

      <Avatar >
            <LockIcon/>

          </Avatar>
          <Typography variant="h5" component="div" sx={{ color: 'black',textAlign:'center',flexGrow: 1,m:2 }}>
         Login AS
          </Typography>
<div style={{display:'flex',justifyContent:'center',width:'100%',alignItems:'center'}}>
          <Button variant="contained" href='/admin'sx={{m:2}}>ADMIN</Button>

          <Button variant="contained" sx={{m:2}} href='/student'>STUDENT</Button>
     </div>
      </Paper>


    </Box>
};

export default Home;


