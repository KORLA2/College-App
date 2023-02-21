import  React ,{useState}from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import LockIcon from "@mui/icons-material/Lock";
import Paper from "@mui/material/Paper";
import {Avatar }from '@mui/material'
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { TextField } from "@mui/material";
import {getStudent, listStudents} from '../graphql/queries'
import { graphqlOperation ,API} from "aws-amplify";
import { CastConnectedSharp } from "@material-ui/icons";
const Student = () => {
const [state, setState] = useState({
  left: false,
});
let [login, setlogin] = useState(1);
let [RollNo,setRollNo]=useState('');
let [student, setstudent] = useState("");
let [Id, setId] = useState("");

const toggleDrawer = (anchor, open) => (event) => {
  if (
    event.type === "keydown" &&
    (event.key === "Tab" || event.key === "Shift")
  ) {
    return;
  }

  setState({ ...state, [anchor]: open });
};

let checkLogin=async ()=>{
try{

  let res = await API.graphql(graphqlOperation(listStudents))

  setlogin(0)
    console.log(res)
    setstudent(res.data.listStudents.items)
}
catch(e){
  console.log(e)
}


}
console.log(student)

const list = (anchor) => (
  <Box
    sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
    role="presentation"
    onClick={toggleDrawer(anchor, false)}
    onKeyDown={toggleDrawer(anchor, false)}
  >
    <List>
      {["View Profile", "View Attendence", "View Marks", "All Students"].map(
        (text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <Link to={`/student/${text}`}>
                <ListItemText primary={text} />
              </Link>
            </ListItemButton>
          </ListItem>
        )
      )}
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
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {!login && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon onClick={toggleDrawer("left", true)} />
              <Drawer
                anchor={"left"}
                open={state["left"]}
                onClose={toggleDrawer("left", false)}
              >
                {list("left")}
              </Drawer>
            </IconButton>
          )}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {login ? "Welcome to Student page" : `Welcome ${student[0].Name} `}
          </Typography>
          {!login && (
            <Button color="secondary" variant="contained" onClick={()=>{setlogin(1)}}>
              Logout
            </Button>
          )}
        </Toolbar>
      </AppBar>

      {login ? (
        <Paper
          elevation={3}
          sx={{ m: 3, p: 3, display: "grid", placeItems: "center" }}
        >
          <Avatar>
            <LockIcon />
          </Avatar>
          <TextField variant="outlined" label="RollNo" sx={{ m: 3 }} />
          <TextField variant="outlined" label="uniqueId" sx={{ m: 3 }} />
          <Button color="secondary" variant="contained" onClick={checkLogin}>
            Login
          </Button>
        </Paper>
      ) : (
        ""
      )}
    </Box>
  );

}


export default Student
