import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import { useState } from "react";
import Login from "./components/Login";
import { useStateValue } from "./providers/StateProvider";
import { auth } from "./config/config";

function App() {
  const [{ user }, dispatch] = useStateValue();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleOpen = () => {
    setSidebarOpen(true);
  };

  const handleClose = () => {
    setSidebarOpen(false);
  };

  useEffect(() => {
    setLoading(true);
    console.log(loading);
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        setLoading(false);
        console.log(authUser);
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <div className="App">
      <Router>
        {!user ? (
          <Login loading={loading} />
        ) : (
          <>
            <Header
              handleOpen={handleOpen}
              handleClose={handleClose}
              sidebarOpen={sidebarOpen}
            />

            <div className="app__body">
              <Sidebar sidebarOpen={sidebarOpen} />

              <Switch>
                <Route path="/room/:roomId">
                  <Chat />
                </Route>
                <Route path="/">
                  <h1>Welcome</h1>
                </Route>
              </Switch>
            </div>
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
