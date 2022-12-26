import * as React from 'react';
import MainHead from './MainHead'
import {Card, TextField,Container, Paper, Avatar, Typography,Grid, Button} from '@material-ui/core'
import { LocalConvenienceStoreOutlined, LockOutlined } from '@material-ui/icons';
import Input from './input'
import {gapi}  from 'gapi-script'
import Icon from './google.jpg'
import {GoogleLogin} from 'react-google-login'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Auth = () => {
let navigate=useNavigate()

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

useEffect(() => {
 function start() {
 gapi.client.init({
 clientId:"639083531683-m6h2gr91ie0mr1asat9j8l1epp2nu946.apps.googleusercontent.com",
 scope: 'email',
   });
    }
   gapi.load('client:auth2', start);
    }, []);



let [showpass,setshowpass]=useState(0);
  
let [user,setuser]=useState(localStorage.getItem('user'));

let handleShowpassword = () => setshowpass(!showpass);

let [SignUp,setSignUp]=useState(1);
  return (
    <div>
      <MainHead />

      <Box sx={{ width: "100%" }}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Login As Student" {...a11yProps(0)} />
            <Tab label="Login As Admin" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Container
            component="main"
            maxWidth="xs"
            style={{ marginTop: "3rem" }}
          >
            <Paper elevation={6} style={{ padding: "2rem" }}>
              <Avatar style={{ margin: "auto" }}>
                <LockOutlined />
              </Avatar>
              <Typography
                variant="h5"
                style={{
                  textAlign: "center",
                  margin: "1rem auto 1rem auto",
                  color: "red",
                }}
              >
                Student SignIn
              </Typography>

              <form onSubmit={() => {}}>
                <GoogleLogin
                  clientId="639083531683-m6h2gr91ie0mr1asat9j8l1epp2nu946.apps.googleusercontent.com"
                  render={(renderprops) => (
                    <Button
                      fullWidth
                      color="secondary"
                      style={{ margin: "1rem 0rem 1rem 0rem" }}
                      onClick={renderprops.onClick}
                      disabled={renderprops.disabled}
                      variant="contained"
                    >
                      Google Sign in
                    </Button>
                  )}
                  onSuccess={async (suc) => {
                    let result = suc?.profileObj;
                    let token = suc?.tokenId;

                    try {
                      localStorage.setItem(
                        "user",
                        JSON.stringify({ token, result })
                      );

                      navigate("/user");
                    } catch (err) {
                      console.log(err);
                    }
                  }}
                  onFailure={(err) => {
                    console.log(err);
                  }}
                  cookiePolicy="single_host_origin"
                />
              </form>
            </Paper>
          </Container>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Container
            component="main"
            maxWidth="xs"
            style={{ marginTop: "3rem" }}
          >
            <Paper elevation={6} style={{ padding: "2rem" }}>
              <Avatar style={{ margin: "auto" }}>
                <LockOutlined />
              </Avatar>
              <Typography
                variant="h5"
                style={{
                  textAlign: "center",
                  margin: "1rem auto 1rem auto",
                  color: "red",
                }}
              >
                Admin SignIn
              </Typography>

              <form onSubmit={() => {}}>
                <GoogleLogin
                  clientId="639083531683-m6h2gr91ie0mr1asat9j8l1epp2nu946.apps.googleusercontent.com"
                  render={(renderprops) => (
                    <Button
                      fullWidth
                      color="secondary"
                      style={{ margin: "1rem 0rem 1rem 0rem" }}
                      onClick={renderprops.onClick}
                      disabled={renderprops.disabled}
                      variant="contained"
                    >
                      Google Sign in
                    </Button>
                  )}
                  onSuccess={async (suc) => {
                    let result = suc?.profileObj;
                    let token = suc?.tokenId;

                    try {
                      localStorage.setItem(
                        "admin",
                        JSON.stringify({ token, result })
                      );

                      navigate("/admin");
                    } catch (err) {
                      console.log(err);
                    }
                  }}
                  onFailure={(err) => {
                    console.log(err);
                  }}
                  cookiePolicy="single_host_origin"
                />
              </form>
            </Paper>
          </Container>
        </TabPanel>
      </Box>
    </div>
  );
}

export default Auth




