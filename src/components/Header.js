import { Button } from "@material-ui/core";
import {
  Menu,
  AccessTime,
  HelpOutline,
  Search,
  Close,
} from "@material-ui/icons";
import React from "react";
import "./css/Header.css";

function Header({ sidebarOpen, setSidebarOpen }) {
  const handleOpen = () => {
    sidebarOpen ? setSidebarOpen(false) : setSidebarOpen(true);
  };

  return (
    <div className="header">
      <div className="header__left">
        <Button onClick={handleOpen}>
          {sidebarOpen ? (
            <Close className="menu__icon" />
          ) : (
            <Menu className="menu__icon" />
          )}
        </Button>

        <AccessTime />
      </div>
      <div className="header__search">
        <Search />
        <input placeholder="Search here..." />
      </div>
      <div className="header__right">
        <HelpOutline />
      </div>
    </div>
  );
}

export default Header;
