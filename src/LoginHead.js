import * as React from "react";

import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import {Toolbar} from '@material-ui/core'
import {useNavigate,Link} from 'react-router-dom'
import {AppBar,IconButton,Typography,Avatar,Tooltip} from '@mui/material'
const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
let navigate=useNavigate();

  const [state, setState] = React.useState({
    left: false,

  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['CollegeFees','Attendence','RecentSemesterMarks','Recent Supply Marks'].map((text, index) => (
          
          <ListItem key={text} disablePadding>
          <Link to ={text} style={{textDecoration:'none' ,color:'black'}}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
            </Link>
          </ListItem>

        ))}
      </List>
      <Divider />
      <List>
        {['SignOut','HostelFees' ,'PayFees'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text}   onClick={(e)=>{if(e.target.innerText==='SignOut') { localStorage.removeItem('user');navigate('/'); }}   }/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );


 let {result:{name,imageUrl}}=JSON.parse(localStorage.getItem('user'));
 
 return (
   <Box sx={{ flexGrow: 1 }}>
     <AppBar position="static">
       <Toolbar>
       <IconButton>
         {
           <React.Fragment key={'left'}>
             <Button onClick={toggleDrawer('left', true)} style={{padding:'.3rem',background:'white'}}><MenuIcon/></Button>
             <SwipeableDrawer
             
               anchor={'left'}
               open={state['left']}
               onClose={toggleDrawer('left', false)}
               onOpen={toggleDrawer('left', true)}
             
             >
               {list('left')}
             </SwipeableDrawer>
           </React.Fragment>
         }
</IconButton>
         <IconButton
           size="large"
           edge="start"
           color="inherit"
           aria-label="menu"
           sx={{ mr: 2 }}
         ></IconButton>
         <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           {name} As Student
         </Typography>
         <Tooltip title="Open settings">
           <IconButton sx={{ p: 0 }}>
             <Avatar alt="R" src={imageUrl} />
           </IconButton>
         </Tooltip>
       </Toolbar>
     </AppBar>
   </Box>
 );
}
export default ResponsiveAppBar;
