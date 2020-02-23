import React from "react";
import "./Video.scss";
// import Header from "./../header/Header";
const apiKey = "?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>";
const VideoDisplay = props => {
  const { image, duration } = props.statistics;
  return (
    <div className="main ">
      <div className="main__bg">
        {/* <article className="main__still"> Shoulda read the instructions..... */}
        <div className="main__settings">
          <video className="main__video" controls poster={image}>
            {" "}
          </video>
          <article className="main__interact">
            <div className="main__play--wrapper">
              <div className="main__play"></div>
              <div className="main__play--icon"></div>
            </div>
            <div className="main__bar--wrapper">
              <div className="main__bar"></div>
              <div className="main__bar--icon"></div>
              <p className="main__duration"> 0:00/{duration}</p>
            </div>
            <div className="main__volume--wrapper">
              <div className="main__volume"></div>
              <div className="main__volume--img1"></div>
              <div className="main__volume--img2"></div>
            </div>
          </article>
        </div>
        {/* </article> */}
      </div>
    </div>
  );
};

export default function(props) {
  //   {
  // console.log(props);
  //   }
  return (
    <div>
      <VideoDisplay statistics={props.statistics} />
    </div>
  );
}
