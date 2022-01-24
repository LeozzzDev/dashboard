import React from "react";
import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  Person,
  Email,
  BarChart,
  Shop,
  MonetizationOn,
  DynamicFeed,
  ChatBubbleOutline,
  Work,
  Info
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-wrapper">
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Dashboard</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <LineStyle className="sidebar-icon" />
              Home
            </li>
            <li className="sidebar-list-item">
              <Timeline className="sidebar-icon" />
              Analytics
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Quick Menu</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <Person className="sidebar-icon" />
              Users
            </li>
            <li className="sidebar-list-item">
              <Shop className="sidebar-icon" />
              Products
            </li>
            <li className="sidebar-list-item">
              <MonetizationOn className="sidebar-icon" />
              Transactions
            </li>
            <li className="sidebar-list-item">
              <BarChart className="sidebar-icon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Notifications</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <Email className="sidebar-icon" />
              Email
            </li>
            <li className="sidebar-list-item">
              <DynamicFeed className="sidebar-icon" />
              Feedbacks
            </li>
            <li className="sidebar-list-item">
              <ChatBubbleOutline className="sidebar-icon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebar-menu">
          <h3 className="sidebar-title">Staff</h3>
          <ul className="sidebar-list">
            <li className="sidebar-list-item">
              <Work className="sidebar-icon" />
              Manage
            </li>
            <li className="sidebar-list-item">
              <TrendingUp className="sidebar-icon" />
              Statistics
            </li>
            <li className="sidebar-list-item">
              <Info className="sidebar-icon" />
              Help
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
