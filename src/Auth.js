import * as React from 'react';
import MainHead from './MainHead'
import {Card, TextField,Container, Paper, Avatar, Typography,Grid, Button} from '@material-ui/core'
import { LocalConvenienceStoreOutlined, LockOutlined } from '@material-ui/icons';
import Input from './input'
import {gapi}  from 'gapi-script'
import Icon from './google.jpg'
import {GoogleLogin} from 'react-google-login'
import { useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom'
const Auth = () => {
let navigate=useNavigate()
useEffect(() => {
 function start() {
 gapi.client.init({
 clientId:"639083531683-m6h2gr91ie0mr1asat9j8l1epp2nu946.apps.googleusercontent.com",
 scope: 'email',
   });
    }
   gapi.load('client:auth2', start);
    }, []);


let handleChange=()=>{

}
let [showpass,setshowpass]=useState(0);
  
let [user,setuser]=useState(localStorage.getItem('user'));

let handleShowpassword = () => setshowpass(!showpass);

let [SignUp,setSignUp]=useState(1);
  return (
    <div>
      <MainHead />
      <Container component="main" maxWidth="xs" style={{ marginTop: "3rem" }}>
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
            {SignUp ? "SignUp" : "SignIn"}
          </Typography>

          <form onSubmit={() => {}}>
            <Grid container spacing={2}>
              {SignUp ? (
                <>
                  <Input
                    name="firstname"
                    label="first name"
                    handleChange={handleChange}
                    autoFocus
                    half
                  />
                  <Input
                    name="firstname"
                    label="last name"
                    half
                    handleChange={handleChange}
                  />
                </>
              ) : (
                ""
              )}
              <Input
                name="email"
                label="email"
                handleChange={handleChange}
                type="email"
              />

              <Input
                name="password"
                label="password"
                handleChange={handleChange}
                type={showpass ? "text" : "password"}
                handleShowpassword={handleShowpassword}
              />
              {SignUp ? (
                <Input
                  name="confirmpassword"
                  label="confirmpassword"
                  handleChange={handleChange}
                  type="password"
                />
              ) : (
                ""
              )}
            </Grid>
            <GoogleLogin
              clientId="639083531683-m6h2gr91ie0mr1asat9j8l1epp2nu946.apps.googleusercontent.com"
              render={(renderprops) => (
                <Button
                  fullWidth
                  color="primary"
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
            <Button
              style={{ margin: "1rem 0rem 1rem 0rem" }}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
            >
              {SignUp ? "SignUp" : "SignIn"}
            </Button>
            <Grid container justify="flex-end">
              <Grid item spacing={2}>
                <Button
color='secondary'
variant='contained'
                  onClick={() => {
                    setSignUp(!SignUp);
                  }}
                >
                  {SignUp
                    ? "Already have an account ?sign In"
                    : "Dont have an account ? SignUp"}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default Auth


