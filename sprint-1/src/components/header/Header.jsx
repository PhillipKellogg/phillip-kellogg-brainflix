import React from "react";

import "./Header.scss";

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <h2>React App</h2>
        <nav>
          <a href="./">Home</a>
          {" | "}
          <a href="./">About</a>
          {" | "}
          <a href="./">Contact</a>
        </nav>
      </header>
    );
  }
}
