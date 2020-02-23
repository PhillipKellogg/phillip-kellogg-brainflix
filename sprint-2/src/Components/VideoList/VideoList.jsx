import React from "react";
import "./VideoList.scss";

import Video0 from "../../Assets/Images/video-list-0.jpg";
import Video1 from "../../Assets/Images/video-list-1.jpg";
import Video2 from "../../Assets/Images/video-list-2.jpg";
import Video3 from "../../Assets/Images/video-list-3.jpg";
import Video4 from "../../Assets/Images/video-list-4.jpg";
import Video5 from "../../Assets/Images/video-list-5.jpg";
import Video6 from "../../Assets/Images/video-list-6.jpg";
import Video7 from "../../Assets/Images/video-list-7.jpg";
import Video8 from "../../Assets/Images/video-list-8.jpg";

const NewVideo = props => {
  const { title, channel, image } = props.information;
  return (
    <article className="side_video__card">
      <img src={image} alt="" className="side_video__img" />
      <div className="side_video__text">
        <h4 className="side_video__video_title">{title}</h4>
        <p className="side_video__channel">{channel}</p>
      </div>
    </article>
  );
};
let videoList = [];

export default class VideoList extends React.Component {
  state = {
    sideVideo: []
  };

  render() {
    return (
      <section className="side_video">
        {/* {this.setState({
          sideVideo: this.props.videoID
        })} */}
        {/* {(videoList = this.props.videoID)}*/}
        {console.log(this.props.videoID)}
        <p className="side_video__title">NEXT VIDEO</p>
        {this.props.videoID.map(sideVideoData => {
          if (sideVideoData.id !== this.props.mainId) {
            return (
              <div key={sideVideoData.id} className="side_video__card">
                <NewVideo information={sideVideoData} />
              </div>
            );
          }
        })}
      </section>
    );
  }
}
