import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pages from "./../Pages/Pages";
import "./Upload.scss";
import Thumbnail from "./../../Assets/Images/Upload-video-preview.jpg";
//maybe transition this into a form, or that new form Daniil demonstrated on wednesday.
export default class Header extends React.Component {
  render() {
    return (
      <Pages>
        <section className="upload">
          <div className="upload__title--wrapper">
            <h1 className="upload__title">Upload Video</h1>
          </div>
          <article className="upload__content">
            {/* <div className="upload__info"> */}
            <div className="upload__img--wrapper">
              <p className="upload__img--desc">VIDEO THUMBNAIL</p>
              <img className="upload__img" src={Thumbnail} alt="" />
            </div>
            <div className="upload__text">
              <div className="upload__name--wrapper">
                <p className="upload__name--desc">TITLE YOUR VIDEO</p>
                <input type="text" className="upload__name" required />
              </div>
              <div className="upload__info--wrapper">
                <p className="upload__info--desc">ADD A VIDEO DESCRIPTION</p>
                <textarea
                  type="text"
                  className="upload__info"
                  required
                ></textarea>
              </div>
            </div>
            {/* </div> */}
          </article>
        </section>
      </Pages>
    );
  }
}
