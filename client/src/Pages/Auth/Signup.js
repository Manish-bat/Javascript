import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container
} from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
//=======================
import { Redirect, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import ErrorMsg from "../../components/MUI/ErrorMsg";
//=======================


const useStyles = makeStyles((theme) => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function SignIn() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const classes = useStyles();

  return (
    <AuthContext>
      {({ error, registeredUser, signUp }) => {
        const submitHandler = (e) => {
          e.preventDefault();
          signUp({ name, email, password, dob, mobile, gender });
        };
        if (registeredUser) {
          return <Redirect to="/login" />;
        }
        return (
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign up
              </Typography>
              <form className={classes.form} noValidate autoComplete="off" onSubmit={submitHandler}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      autoComplete="name"
                      name="name"
                      variant="outlined"
                      required
                      fullWidth
                      id="name"
                      label="Full Name"
                      autoFocus
                      onChange={(e) => setName(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      type="email"
                      autoComplete="email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      name="mobile"
                      variant="outlined"
                      required
                      fullWidth
                      id="mobile"
                      label="Mobile"
                      autoFocus
                      onChange={(e) => setMobile(e.target.value)}
                    />
                  </Grid>
                 
  

                  <Grid item xs={12}>
                    <TextField
                      name="dob"
                      type="date"
                      variant="outlined"
                      required
                      fullWidth
                      defaultValue="2021/02/12"
                      id="date"
                      className={classes.textField}
                      label="Date Of Birth"
                      autoFocus
                      onChange={(e) => setDob(e.target.value)}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>

                  <FormControl component="fieldset">
  <FormLabel component="legend">Gender</FormLabel>
  <RadioGroup aria-label="gender" name="gender1"  onChange={(e)=> setGender(e.target.value)}>
    <FormControlLabel value="female" control={<Radio />} label="Female" />
    <FormControlLabel value="male" control={<Radio />} label="Male" />
  </RadioGroup>
</FormControl>
</Grid>

                  {/* <Grid item xs={12}>
                    <TextField
                      name="gender"
                      variant="outlined"
                      required
                      fullWidth
                      id="gender"
                      label="Gender"
                      autoFocus
                      onChange={(e) => setGender(e.target.value)}
                    />
                  </Grid> */}
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Sign Up
                </Button>
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link to="/login" variant="body2">
                      Already have an account? Sign in
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
            <Box mt={5}>
              
            </Box>
            {error === "Invalid Data" ? (
              <ErrorMsg message="please provide a valid email & Password at least 7 characters" />
            ) : (
              ""
            )}
          </Container>
        );
      }}
    </AuthContext>
  );
}
