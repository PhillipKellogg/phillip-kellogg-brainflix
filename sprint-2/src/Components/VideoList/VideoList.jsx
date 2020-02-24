import React from "react";
import "./VideoList.scss";
import { Link } from "react-router-dom";

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
              <Link to={`/video/${sideVideoData.id}`}>
                {/* {console.log(sideVideoData.id)} */}
                <div key={sideVideoData.id} className="side_video__card">
                  <NewVideo information={sideVideoData} />
                </div>
              </Link>
            );
          }
        })}
      </section>
    );
  }
}
