import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../config/config";
import { useStateValue } from "../providers/StateProvider";
import { actionTypes } from "../reducers/reducer";
import "./css/Login.css";
import Loader from "./Loader";

function Login({ loading }) {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div>
      {loading ? (
        <Loader loading={loading} />
      ) : (
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
      )}
    </div>
  );
}

export default Login;
