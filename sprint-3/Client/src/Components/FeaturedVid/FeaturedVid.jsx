import React from "react";
import Comments from "../Comments/Comments";
import VideoList from "../VideoList/VideoList";
import "./FeaturedVid.scss";
import Pages from "../Pages/Pages";
import Video from "./../Video/Video";
import axios from "axios";
import Description from "./../Description/Description";
export default class FeaturedVid extends React.Component {
  state = {
    mainVideo: {
      id: this.props.match.params.id,
      comments: []
    },
    videoList: []
  };
  componentDidMount() {
    axios
      .get(`http://localhost:8080/videos`)
      .then(res => {
        this.setState({
          videoList: res.data
        });
      })
      .catch(error => console.error(error));
    axios
      .get(`http://localhost:8080/videos/${this.state.mainVideo.id}`)
      .then(res => {
        this.setState({
          mainVideo: res.data
        });
      })
      .catch(error => console.error(error));
  }
  componentDidUpdate(prevProps, prevState) {
    let currentID = this.props.match.params.id;
    if (prevState.mainVideo.id !== currentID) {
      axios.get(`http://localhost:8080/videos/${currentID}`).then(res => {
        // console.log(res.data);
        this.setState({
          mainVideo: res.data
        });
      });
    }
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
