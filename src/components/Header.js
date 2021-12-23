import React from "react";
import "./Header.css";
import punklogo from "../assets/header/cryptopunk-logo.png";
import searchIcon from "../assets/header/search.png";
import themeSwitchIcon from "../assets/header/theme-switch.png";
import { buildTimeValue } from "@testing-library/user-event/dist/utils";

function Header() {
  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punklogo} className="punkLogo" />
      </div>

      <div className="searchBar">
        <div className="searchIcon">
          <img src={searchIcon} />
        </div>
        <input
          className="searchInput"
          placeholder="Collection, item or user..."
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div className="themeSwitchContainer">
          <img src={themeSwitchIcon} />
        </div>
      </div>

      <div className="loginBtn">CONNECT</div>
    </div>
  );
}

export default Header;
