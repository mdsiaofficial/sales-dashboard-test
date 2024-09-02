import React from "react";
import "./Header.css";
import searchIcon from "../../assets/searchIcon.svg";
import notificationIcon from "../../assets/notificationIcon.svg";
import circle from "../../assets/circle.svg";

export default function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__overview">
          <h1 className="header__title">Overview</h1>
          <span className="header__date">24th November 2021</span>
        </div>
        <div className="header__right">
          <div className="header__search">
            <img src={searchIcon} alt="Search" className="header__icon" />
            <input
              type="text"
              className="header__input"
              placeholder="Search something"
            />
          </div>
          <div className="header__notifications">
            <img
              src={notificationIcon}
              alt="Notifications"
              className="header__icon"
            />
            <img src={circle} alt="User" className="header__user-icon" />
          </div>
        </div>
      </div>
    </header>
  );
}
