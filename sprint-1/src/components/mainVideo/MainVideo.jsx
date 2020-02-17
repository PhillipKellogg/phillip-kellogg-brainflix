import React from "react";
import Thumbnail from "../../Assets/Images/video-list-0.jpg";
import Video from "../../Assets/Video/BrainStation Sample Video.mp4";
import Comments from "../comments/Comments";
import VideoList from "../videoList/VideoList";
import "./MainVideo.scss";
const VideoDisplay = props => {
  const { image, duration } = props.statistics;
  return (
    <div className="main ">
      <div className="main__bg">
        {/* <article className="main__still"> Shoulda read the instructions..... */}
        <div className="main__settings">
          <video className="main__video" poster={image}></video>
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
const Description = props => {
  const {
    title,
    channel,
    timestamp,
    views,
    likes,
    description
  } = props.statistics;
  return (
    <article className="info bottom__desc">
      <article className="info__top">
        <h2 className="info__title">{title}</h2>
        <span className="info__user">
          <p className="info__channel">By {channel}</p>
          <p className="info__timestamp">{timestamp}</p>
        </span>
        <article className="info__stats">
          <div className="info__views">
            <div className="info__icon--views"></div>
            <p>{views}</p>
          </div>
          <div className="info__likes">
            <div className="info__icon--likes"></div>
            <p>{likes}</p>
          </div>
        </article>
      </article>
      <p className="info__description"> {description}</p>
    </article>
  );
};
export default class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      mainVideo: [
        {
          id: 12345,
          title: "BMX Rampage: 2018 Highlights",
          description:
            "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
          channel: "Red Cow",
          image: Thumbnail,
          views: "1,001,023",
          likes: "110,985",
          duration: "0:42",
          video: Video,
          timestamp: "12/18/2018",
          comments: [
            {
              id: 678,
              name: "Micheal Lyons",
              timestamp: 26577,
              comment:
                "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
            },
            {
              id: 876,
              name: "Gary Wong",
              timestamp: 705904170,
              comment:
                "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
            },
            {
              id: 777,
              name: "Theodore Duncan",
              timestamp: 81905906540,
              comment:
                "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
            }
          ]
        }
      ]
    };
  }
  render() {
    return (
      <section>
        {this.state.mainVideo.map(StatisticsObj => {
          return (
            <div key={StatisticsObj.id}>
              <VideoDisplay statistics={StatisticsObj} />
              <article className="bottom">
                <article className="bottom__left">
                  <Description statistics={StatisticsObj} />
                  <Comments comments={this.state.mainVideo[0].comments} />
                </article>
                <VideoList mainId={this.state.mainVideo[0].id} />
              </article>
            </div>
          );
        })}
      </section>
    );
  }
}
