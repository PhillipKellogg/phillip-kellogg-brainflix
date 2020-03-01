import React from "react";
import Comments from "../Comments/Comments";
import VideoList from "../VideoList/VideoList";
import "./Main.scss";
import Pages from "../Pages/Pages";
import Video from "./../Video/Video";
import axios from "axios";
import Description from "./../Description/Description";
export default class Main extends React.Component {
  state = { mainVideo: { id: "", comments: [] }, videoList: [] };

  componentDidMount() {
    axios
      .get("http://localhost:8080/videos/1af0jruup5gu")
      .then(res => {
        this.setState({
          mainVideo: res.data
        });
      })
      .catch(error => console.error(error));
    axios
      .get(`http://localhost:8080/videos`)
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
