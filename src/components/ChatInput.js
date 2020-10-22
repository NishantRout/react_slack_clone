import React, { useState } from "react";
import { useStateValue } from "../providers/StateProvider";
import "./css/ChatInput.css";
import firebase from "firebase";
import db from "../config/config";
import { Send } from "@material-ui/icons";

function ChatInput({ channelName, channelId, sidebarOpen }) {
  const [input, setInput] = useState("");
  const [{ user }, dispatch] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();

    if (channelId) {
      db.collection("rooms").doc(channelId).collection("messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        user: user.displayName,
        userImage: user.photoURL,
      });
    }

    setInput("");
  };

  console.log("status", sidebarOpen);

  return (
    <div className="chatInput">
      <form action="">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Message #${channelName?.toLowerCase()}`}
        />
        <button
          className={sidebarOpen && "chatInput__button"}
          type="submit"
          onClick={sendMessage}
        >
          <Send />
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
