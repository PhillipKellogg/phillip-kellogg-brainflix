import React from "react";
import Comments from "../Comments/Comments";
import VideoList from "../VideoList/VideoList";
import "./FeaturedVid.scss";
import Pages from "../Pages/Pages";
import Video from "./../Video/Video";
import axios from "axios";
import Description from "./../Description/Description";

// const herokuURL = "https://project-2-api.herokuapp.com/videos";
// const API_KEY = "?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>";
// const apiRequest = `${herokuURL}${herokuKey}`;
// const videoIdno4 = "1a4kjruuedd9";
// const vidIdRequest = `https://project-2-api.herokuapp.com/videos/1aivjruutn6a?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>`;

export default class FeaturedVid extends React.Component {
  state = {
    mainVideo: {
      id: this.props.match.params.id,
      comments: []
    },
    videoList: []
  };

  // this.setState({
  //   mainVideo: { id: this.props.match.params }
  // });
  // shouldComponentUpdate(nextProps) {}
  componentDidMount() {
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

    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${this.state.mainVideo.id}?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>`
      )
      .then(res => {
        console.log(res.data);

        this.setState({
          mainVideo: res.data
        });
      })
      .catch(error => console.error(error));
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log(this.props.match.params.id);

    let currentID = this.props.match.params.id;
    if (prevState.mainVideo.id !== currentID) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${currentID}?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>`
        )
        .then(res => {
          console.log(res.data);
          this.setState({
            mainVideo: res.data
            // mainVideo: { comments: res.data.comments }
            // mainVideo: { comments: res.data.comments }
          });
        });
    }
    //   this.setState({
    //     mainVideo: this.props.match.params
    //   });
    //   axios
    //     .get(
    //       `https://project-2-api.herokuapp.com/videos/${this.state.mainVideo.id}${API_KEY}`
    //     )
    //     .then(res => {
    //       this.setState({
    //         mainVideo: res.data
    //       });
    //     });
    //   axios
    //     .get(
    //       `https://project-2-api.herokuapp.com/videos/${this.state.mainVideo.id}${API_KEY}`
    //     )
    //     .then(res => {
    //       // const persons = res.data;  npm i react-router-dom
    //       // console.log(res.data);
    //       this.setState({
    //         mainVideo: res.data
    //       });
    //       // console.log(this.state.mainVideo);
    //     })
    //     .catch(error => console.error(error));
    // }
  }
  //   const videoId = this.props.match.params.id;
  //   console.log("component did update");
  // if(  this.state.mainVideo.id !== videoId ){
  //     this.getMainVideo(videoId).then(mainVideoRes => {
  //       this.setState({
  //         mainVideo: mainVideoRes.data
  //       });
  //     });

  render() {
    console.log(this.props.match.params.id);

    return (
      <>
        {/* {console.log(this.props.match.params)} */}
        <Pages>
          <Video statistics={this.state.mainVideo} />
          <div className="bottom">
            <div className="bottom__left">
              <Description statistics={this.state.mainVideo} />
              {/* {console.log(this.state.mainVideo.comments)}} */}
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
