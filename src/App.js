import React from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Chat from "./components/Chat";
import { useState } from "react";

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleOpen = () => {
    setSidebarOpen(true);
  };

  const handleClose = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="App">
      <Router>
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
      </Router>
    </div>
  );
}

export default App;
