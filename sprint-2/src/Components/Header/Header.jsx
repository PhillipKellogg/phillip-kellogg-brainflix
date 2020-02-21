import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
// import Upload from "../Upload/Upload";
export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Link className="header__logo" to="/" />
        <div> </div>
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
            <Link className="header__upload" to="/upload">
              <div className="header__upload--icon">
                <span className="header__upload--text">UPLOAD</span>
              </div>
            </Link>
            <div className="header__user"></div>
          </div>
        </div>
      </header>
    );
  }
}
