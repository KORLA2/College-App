import React,{useState,useEffect} from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";

import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import '@aws-amplify/ui-react/styles.css';
import {Link} from 'react-router-dom'
import {Amplify,Auth} from 'aws-amplify'
import awsconfig from "../aws-exports";

import { Authenticator } from "@aws-amplify/ui-react";


Amplify.configure(awsconfig);


const Admin = () => {

let [islogged, setislogged] = useState(0);

  const [state, setState] = React.useState({
    
     left: false,
 
   });

   const toggleDrawer = (anchor, open) => (event) => {
     if (
       event.type === "keydown" &&
       (event.key === "Tab" || event.key === "Shift")
     ) {
       return;
     }

     setState({ ...state, [anchor]: open });
   };

   const list = (anchor) => (
     <Box
       sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
       role="presentation"
       onClick={toggleDrawer(anchor, false)}
       onKeyDown={toggleDrawer(anchor, false)}
     >
       <List>
       
       
      {["Add Student", "Set Attendance", "Add Subjects", "Add Year" ,"Add Branch" ,"Update Students"].map((text, index) => (
         
           <ListItem key={text} disablePadding>
             <ListItemButton>
               <ListItemIcon>
                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
               </ListItemIcon>
<Link to={`/admin/${text}`} >

       <ListItemText primary={text} />
</Link>

             </ListItemButton>
           </ListItem>
         ))}
        </List>
       <Divider />
       <List>
         {["All mail", "Trash", "Spam"].map((text, index) => (
           <ListItem key={text} disablePadding>
             <ListItemButton>
               <ListItemIcon>
                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
               </ListItemIcon>
               <ListItemText primary={text} />
             </ListItemButton>
           </ListItem>
         ))}
       </List>
     </Box>
   );
useEffect(() => {
  async function checkuser() {
    try {
    Auth.currentAuthenticatedUser().then(res=>setislogged(1))
     
    } catch (er) {
      console.log(er);
    }
  }
  checkuser();
}, []);
console.log(islogged)


let signOut=async()=>{
try{

  await Auth.signOut();
setislogged(0)
}catch(e){console.log(e)}

};

console.log(islogged)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <IconButton onClick={toggleDrawer("left", true)}>
              {islogged ? <MenuIcon /> : ""}
            </IconButton>
            <Drawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              {list("left")}
            </Drawer>
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: "center", flexGrow: 1 }}
          >
            Welcome Admin
          </Typography>
          {islogged ? (
            <Button variant="contained" color="secondary" onClick={signOut}>
              SignOut
            </Button>
          ) : (
            ""
          )}
        </Toolbar>
      </AppBar>
  
          <Authenticator>
 
       
          </Authenticator>
     

    </Box>
  );
};

export default Admin;


