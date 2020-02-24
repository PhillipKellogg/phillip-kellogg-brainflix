import React from "react";
// import Thumbnail from "../../Assets/Images/video-list-0.jpg";
// import Video from "../../Assets/Video/BrainStation Sample Video.mp4";
import Comments from "../Comments/Comments";
import VideoList from "../VideoList/VideoList";
import "./Main.scss";
import Pages from "../Pages/Pages";
import Video from "./../Video/Video";
import axios from "axios";
import Description from "./../Description/Description";

// const herokuURL = "https://project-2-api.herokuapp.com/videos";
// const herokuKey = "?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>";
// const apiRequest = `${herokuURL}${herokuKey}`;
// const videoIdno4 = "1a4kjruuedd9";
// const vidIdRequest = `https://project-2-api.herokuapp.com/videos/1aivjruutn6a?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>`;

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
// const herokuKey = "?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>";
// const apiRequest = `${herokuURL}${herokuKey}`;
// const videoIdno4 = "1a4kjruuedd9";
// const vidIdRequest = `https://project-2-api.herokuapp.com/videos/1aivjruutn6a?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>`;
// const herokuURL = "https://project-2-api.herokuapp.com/videos";
export default class Main extends React.Component {
  state = { mainVideo: { id: "", comments: [] }, videoList: [] };

  componentDidMount() {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/1af0jruup5gu?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>`
      )
      .then(res => {
        // const persons = res.data;  npm i react-router-dom
        // console.log(res.data);
        this.setState({
          mainVideo: res.data
        });
        // console.log(this.state.mainVideo);
      })
      .catch(error => console.error(error));
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>`
      )
      .then(res => {
        this.setState({
          videoList: res.data
        });
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <>
        <Pages>
          <Video statistics={this.state.mainVideo} />
          <div className="bottom">
            <div className="bottom__left">
              <Description statistics={this.state.mainVideo} />
              <Comments comments={this.state.mainVideo.comments} />
            </div>
            <VideoList
              videoID={this.state.videoList}
              mainId={this.state.mainVideo.id}
            />
          </div>
        </Pages>
      </>
    );
  }
}
