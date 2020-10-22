import React from "react";
import { useHistory } from "react-router-dom";
import db from "../config/config";
import firebase from "firebase";
import "./css/SidebarOption.css";
import { useStateValue } from "../providers/StateProvider";

function SidebarOption({ Icon, title, id, addChannelOption, endSession }) {
  const history = useHistory();
  const [{ user }, dispatch] = useStateValue();

  const selectChannel = () => {
    if (id) {
      history.push(`/room/${id}`);
    } else {
      history.push(title);
    }
  };

  const addChannel = () => {
    const channelName = prompt("Please enter the channel name!");

    if (channelName) {
      db.collection("rooms").add({
        name: channelName,
      });
    }
  };

  const signOut = () => {
    firebase
      .auth()
      .signOut()
      .then(function () {
        dispatch({
          type: "SET_USER",
          user: null,
        });
      })
      .catch(function (error) {
        alert(error.message);
      });
  };

  return (
    <div
      className="sidebarOption"
      onClick={
        addChannelOption ? addChannel : endSession ? signOut : selectChannel
      }
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <h3 className="sidebarOption__channel">
          <span className="sidebarOption__hash">#</span>
          {title}
        </h3>
      )}
    </div>
  );
}

export default SidebarOption;
