import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Header.scss";
// import Upload from "../Upload/Upload";
export default class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo">
          <Link to="/"></Link>
        </div>

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
            <div className="header__upload">
              <div className="header__upload--icon">
                <Link className="header__upload--text" to="/upload">
                  UPLOAD
                  {/* <span className="header__upload--text">UPLOAD</span> */}
                </Link>
              </div>
            </div>
            <div className="header__user"></div>
          </div>
        </div>
      </header>
    );
  }
}
