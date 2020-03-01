import React from "react";
import "./Video.scss";
const API_KEY = "?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>";
const VideoDisplay = props => {
  const { video, image, duration } = props.statistics;
  return (
    <div className="main ">
      <div className="main__bg">
        <div className="main__settings">
          <video
            src={`${video}${API_KEY}`}
            className="main__video"
            controls
            poster={image}
            autoPlay
          ></video>
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
      </div>
    </div>
  );
};

export default function(props) {
  return (
    <div>
      <VideoDisplay statistics={props.statistics} />
    </div>
  );
}
