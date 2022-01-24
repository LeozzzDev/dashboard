import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import TopbarAvatarIcon from "../../assets/topbar-avatar-icon.jpg";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbar-wrapper">
        <div className="tobpar-left-wrapper">
          <span className="logo">Dev Dashboard</span>
        </div>
        <div className="tobpar-right-wrapper">
          <div className="topbar-notification-icon-wrapper">
            <NotificationsNone />
            <span className="topbar-notification-icon-badge">2</span>
          </div>
          <div className="topbar-notification-icon-wrapper">
            <Language />
          </div>
          <div className="topbar-notification-icon-wrapper">
            <Settings />
          </div>
          <div>
            <img
              className="topbar-avatar-icon"
              src={TopbarAvatarIcon}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
