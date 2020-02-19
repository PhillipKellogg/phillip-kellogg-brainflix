import React from "react";

import "./Header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo"></div>
        <div className="header__interact">
          <div className="header__search--wrapper">
            <input
              placeholder="Search"
              type="text"
              name="search"
              id=""
              className="header__search"
            />
            <div className="header__search--icon"></div>
          </div>
          <div className="header__actions">
            <button className="header__upload">
              <div className="header__upload--icon">
                <span className="header__upload--text">UPLOAD</span>
              </div>
            </button>
            <div className="header__user"></div>
          </div>
        </div>
      </header>
    );
  }
}
