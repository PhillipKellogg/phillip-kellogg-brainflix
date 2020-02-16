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

export default class VideoList extends React.Component {
  constructor() {
    super();
    this.state = {
      sideVideo: [
        {
          id: 12345,
          title: "BMX Rampage: 2018 Highlights",
          channel: "Scotty Cranmer",
          image: Video0
        },
        {
          id: 12346,
          title: "Become A Travel Pro In One Easy Lesson...",
          channel: "Scotty Cranmer",
          image: Video1
        },
        {
          id: 123457,
          title: "Les Houches The Hidden Gem Of The...",
          channel: "Scotty Cranmer",
          image: Video2
        },
        {
          id: 123458,
          title: "Travel Health Useful Medical Information...",
          channel: "Scotty Cranmer",
          image: Video3
        },
        {
          id: 123459,
          title: "Cheap Airline Tickets Great Ways To Save",
          channel: "Emily Harper",
          image: Video4
        },
        {
          id: 123451,
          title: "Choose The Perfect Accommodations",
          channel: "Ethan Owen",
          image: Video5
        },
        {
          id: 123452,
          title: "Take A Romantic Break In A Boutique Hotel",
          channel: "Lydia Perez",
          image: Video6
        },
        {
          id: 123453,
          title: "Cruising Destination Ideas",
          channel: "Timothy Austin",
          image: Video7
        },
        {
          id: 1234544,
          title: "Train Travel On Track For Safety",
          channel: "Scotty Cranmer",
          image: Video8
        }
      ]
    };
  }
  render() {
    return (
      <section className="side_video">
        <p className="side_video__title">NEXT VIDEO</p>
        {this.state.sideVideo.map(sideVideoData => {
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
