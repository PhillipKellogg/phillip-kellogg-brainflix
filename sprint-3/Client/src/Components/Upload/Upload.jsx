import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Pages from "./../Pages/Pages";
import axios from "axios";
import "./Upload.scss";
import Thumbnail from "./../../Assets/Images/Upload-video-preview.jpg";
//maybe transition this into a form, or that new form Daniil demonstrated on wednesday.
export default class Header extends React.Component {
  // componentDidMount() {

  // }
  newUpload = e => {
    e.preventDefault();
    // console.log(e.target.value);
    console.log(e.target[0].value);
    console.log(e.target[1].value);

    axios
      .post(`http://localhost:8080/videos`, {
        title: e.target[0].value,
        description: e.target[1].value
      })
      .then(res => {
        console.log(res);
      });
    e.target[0].value = "";
    e.target[1].value = "";
    //     .catch(error => console.error(error));
    //     .catch(error => console.error(error));
  };
  render() {
    return (
      <Pages>
        <section className="upload">
          <div className="upload__title--wrapper">
            <h1 className="upload__title">Upload Video</h1>
          </div>
          <form onSubmit={this.newUpload}>
            <article className="upload__content">
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
            <div className="publish">
              <div className="publish__place_holder"></div>
              <div className="publish__wrapper">
                <div className="publish__cancel">Cancel</div>
                {/* <div onClick={this.} className="publish__button">
                  PUBLISH
                </div> */}
                <input
                  type="submit"
                  value="Publish"
                  className="publish__button"
                />
              </div>
            </div>
          </form>
        </section>
      </Pages>
    );
  }
}
