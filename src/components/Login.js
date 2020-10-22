import { Button } from "@material-ui/core";
import React from "react";
import { auth } from "../config/config";
import "./css/Login.css";

function Login() {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/2111/2111615.svg"
          alt="slack logo"
        />
        <h2>Sign in to Perfect Shades</h2>
        <p>perfectshades.slack.com</p>
        <Button onClick={signIn}>Sign In with Google</Button>
      </div>
    </div>
  );
}

export default Login;
