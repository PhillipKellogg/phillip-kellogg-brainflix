import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import axios from "axios";
import Upload from "./Components/Upload/Upload";

export default class App extends React.Component {
  state = { videoList: [] };

  componentDidMount() {
    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>`
      )
      .then(res => {
        this.setState({
          videoList: res.data
        });
        console.log(this.state.videoList);
      })
      .catch(error => console.error(error));
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            {/* <Route exact path="/" component={Main} /> */}
            <Route
              exact
              path="/"
              render={() => <Main videoID={this.state.videoList} />}
            />
            {/* {console.log(this.state.videoList)} */}
            <Route
              path="/video/:id"
              render={() => <Main videoID={this.state.videoList} />}
            />
            <Route path="/upload" component={Upload} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
