import React from "react";

import "./Header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo"></div>
        <div>
          <input
            placeholder="Search"
            type="text"
            name="search"
            id=""
            className="header__search"
          />
          <div className="header__actions">
            <button className="header__upload">UPLOAD</button>
            <div className="header__user"></div>
          </div>
        </div>
      </header>
    );
  }
}
