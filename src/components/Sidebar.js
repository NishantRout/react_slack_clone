import {
  Add,
  Apps,
  BookmarkBorder,
  Create,
  Drafts,
  ExitToApp,
  ExpandLess,
  ExpandMore,
  FiberManualRecord,
  FileCopy,
  Inbox,
  InsertComment,
  PeopleAlt,
} from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import "./css/Sidebar.css";
import SidebarOption from "./SidebarOption";
import db from "../config/config";
import { Avatar } from "@material-ui/core";
import { useStateValue } from "../providers/StateProvider";

function Sidebar({ sidebarOpen }) {
  const [channels, setChannels] = useState([]);
  const [{ user }, dispatch] = useStateValue();

  const displaySidebar = () => {
    document.getElementById("sidebar").style.width = "260px";
    // document.getElementById("sidebar__header").style.display = "flex";
  };

  const hideSidebar = () => {
    document.getElementById("sidebar").style.width = "0px";
    // document.getElementById("sidebar__header").style.display = "none";
  };

  useEffect(() => {
    sidebarOpen ? displaySidebar() : hideSidebar();
  }, [sidebarOpen]);

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <div className="sidebar" id="sidebar">
      <div className="sidebar__header" id="sidebar__header">
        <Avatar
          className="header__avatar"
          alt={user?.displayName}
          src={user?.photoURL}
        />
        <div className="sidebar__info">
          <h2>Perfect Shades</h2>
          <h3>
            <FiberManualRecord />
            {user?.displayName}
          </h3>
        </div>
        <Create />
      </div>
      <SidebarOption Icon={InsertComment} title="Threads" />
      <SidebarOption Icon={Inbox} title="Mentions & Reactions" />
      <SidebarOption Icon={Drafts} title="Saved Items" />
      <SidebarOption Icon={BookmarkBorder} title="Channel Browser" />
      <SidebarOption Icon={PeopleAlt} title="People & User Groups" />
      <SidebarOption Icon={Apps} title="Apps" />
      <SidebarOption Icon={FileCopy} title="File Browser" />
      <SidebarOption Icon={ExitToApp} endSession title="Sign out" />
      <SidebarOption Icon={ExpandLess} title="Show Less" />
      <hr />
      <SidebarOption Icon={ExpandMore} title="Channels" />
      <hr />
      <SidebarOption Icon={Add} addChannelOption title="Add Channel" />
      {channels.map((channel) => (
        <SidebarOption title={channel.name} id={channel.id} />
      ))}
    </div>
  );
}

export default Sidebar;
