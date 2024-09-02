import React from "react";
import "./Navigation.css";
import companyLogo from "../../assets/companyLogo.svg";
import overview from "../../assets/overview.svg";
import tending from "../../assets/tending.svg";
import spreadsheet from "../../assets/spreadsheet.svg";
import inbox from "../../assets/inbox.svg";
import logout from "../../assets/logout.svg";
import settings from "../../assets/settings.svg";
import leaderboard from "../../assets/leaderboard.svg";
import schedule from "../../assets/schedule.svg";
import community from "../../assets/community.svg";

const Navigation = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="profile-section">
          <div className="profile-icon-wrapper">
            <img
              src={companyLogo}
              alt="Company Logo"
              className="company-logo"
            />
            <span className="profile-initial">D</span>
          </div>
          <span className="profile-name">Dagank</span>
        </div>
        <nav className="nav-section">
          <ul>
            <li className="nav-item active">
              <img src={overview} alt="Overview Icon" />
              <span className="nav-text">Overview</span>
            </li>
            <li className="nav-item">
              <img src={tending} alt="Trending Icon" />
              <span className="nav-text">Trending</span>
            </li>
            <li className="nav-item">
              <img src={spreadsheet} alt="Spreadsheet Icon" />
              <span className="nav-text">Spreadsheet</span>
            </li>
            <li className="nav-item">
              <img src={inbox} alt="Message Icon" />
              <span className="nav-text">Message</span>
              <div className="notification-wrapper">
                <span className="notification-text">2</span>
              </div>
            </li>
            <li className="nav-item">
              <img src={schedule} alt="Schedule Icon" />
              <span className="nav-text">Schedule</span>
            </li>
            <li className="nav-item">
              <img src={leaderboard} alt="Leaderboard Icon" />
              <span className="nav-text">Leaderboard</span>
            </li>
            <li className="nav-item">
              <img src={community} alt="Community Icon" />
              <span className="nav-text">Community</span>
            </li>
            <li className="nav-item">
              <img src={settings} alt="Settings Icon" />
              <span className="nav-text">Settings</span>
            </li>
          </ul>
        </nav>
        <div className="logout-section">
          <img src={logout} alt="Logout Icon" />
          <span className="nav-text">Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
