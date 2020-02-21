import React from "react";
// import Thumbnail from "../../Assets/Images/video-list-0.jpg";
// import Video from "../../Assets/Video/BrainStation Sample Video.mp4";
import Comments from "../Comments/Comments";
import VideoList from "../VideoList/VideoList";
import "./Main.scss";
import Pages from "../Pages/Pages";
import Video from "./../Video/Video";
import axios from "axios";
const herokuURL = "https://project-2-api.herokuapp.com/videos";
const herokuKey = "?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>";
const apiRequest = `${herokuURL}${herokuKey}`;
const videoIdno4 = "1a4kjruuedd9";
const vidIdRequest = `https://project-2-api.herokuapp.com/videos/1aivjruutn6a?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>`;
axios
  .get(apiRequest)
  .then(res => {
    // const persons = res.data;
    let videoList = res.data;
    console.log(res.data);
    console.log(videoList);

    // console.log(res);
  })
  .catch(error => console.error(error));
axios
  .get(vidIdRequest)
  .then(res => {
    // const persons = res.data;  npm i react-router-dom
    console.log(res.data);
    let mainVideo = res.data;
    // console.log(res);
  })
  .catch(error => console.error(error));

// function timeSince(date) {
//   var seconds = Math.floor((new Date() - date) / 1000);

//   var interval = Math.floor(seconds / 31536000);

//   if (interval > 1) {
//     return interval + " years ago";
//   }
//   interval = Math.floor(seconds / 2592000);
//   if (interval > 1) {
//     return interval + " months ago";
//   }
//   interval = Math.floor(seconds / 86400);
//   if (interval > 1) {
//     return interval + " days ago";
//   }
//   interval = Math.floor(seconds / 3600);
//   if (interval > 1) {
//     return interval + " hours ago";
//   }
//   interval = Math.floor(seconds / 60);
//   if (interval > 1) {
//     return interval + " minutes ago";
//   }
//   return Math.floor(seconds) + " seconds ago";
// }

// let date1 = 232224324;
// let date2 = 235466;
// let date3 = 1246444;
// let date4 = 124644224;

export default class Main extends React.Component {
  // this.state = {mainVideo, vidIdRequest}
  //       mainVideo: {
  //         id: 12345,
  //         title: "BMX Rampage: 2018 Highlights",
  //         description:
  //           "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
  //         channel: "Red Cow",
  //         image: Thumbnail,
  //         views: "1,001,023",
  //         likes: "110,985",
  //         duration: "0:42",
  //         video: Video,
  //         timestamp: timeSince(new Date(Date.now() - date1)),
  //         comments: [
  //           {
  //             id: 678,
  //             name: "Micheal Lyons",
  //             timestamp: timeSince(new Date(Date.now() - date2)),
  //             comment:
  //               "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  //           },
  //           {
  //             id: 876,
  //             name: "Gary Wong",
  //             timestamp: timeSince(new Date(Date.now() - date3)),
  //             comment:
  //               "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  //           },
  //           {
  //             id: 777,
  //             name: "Theodore Duncan",
  //             timestamp: timeSince(new Date(Date.now() - date4)),
  //             comment:
  //               "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  //           }
  //         ]
  //       }
  //     };
  //   }
  render() {
    return (
      <>
        <Pages>
          <p>hi</p>
          <Video />
          {/* {this.state.mainVideo(StatisticsObj => {

            <Video statistics={this.state.mainVideo} />
            <div className="bottom">
              <div className="bottom__left">
                <Description statistics={this.state.mainVideo} />
                <Comments comments={this.state.mainVideo.comments} />
              </div>
              <VideoList mainId={this.state.mainVideo.id} />
            </div>
            ); })} */}

          <p>{mainVideos}</p>
        </Pages>
      </>
    );
  }
}
