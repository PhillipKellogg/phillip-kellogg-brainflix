import React from "react";

import "./Header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <h2>React App</h2>
        <div className="header__logo"></div>
        <div>
          <form action="">
            <input type="text" name="search" id="" className="header__search" />
          </form>
        </div>
        <div className="header__upload"></div>
      </header>
    );
  }
}
