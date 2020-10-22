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

function Header({ handleOpen, handleClose, sidebarOpen }) {
  return (
    <div className="header">
      <div className="header__left">
        <Button>
          {sidebarOpen ? (
            <Close className="menu__icon" onClick={handleClose} />
          ) : (
            <Menu className="menu__icon" onClick={handleOpen} />
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
