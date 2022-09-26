import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { Typography } from "@mui/material";
import Fab from "@mui/material/Fab";
import Link from "@mui/material/Link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import HomePage from "../HomePage";
import { auth } from "../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
const LoginPage = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const signinToFirebase = async () => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      console.log(result);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Typography>Sign in with Email</Typography>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <TextField
            id="outlined-password-input"
            label="Email"
            type="text"
            autoComplete="current-password"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
        </CardContent>
        <CardActions>
          <Fab
            variant="extended"
            size="small"
            color="primary"
            aria-label="add"
            onClick={signinToFirebase}
          >
            Submit
          </Fab>
          <Link href="#" underline="none">
            {"Forgot Password ?"}
          </Link>
        </CardActions>
      </Card>
    </>
  );
};

export default LoginPage;
