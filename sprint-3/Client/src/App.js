import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Upload from "./Components/Upload/Upload";
import FeaturedVid from "./Components/FeaturedVid/FeaturedVid";
export default class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route
              path="/video/:id"
              render={props => <FeaturedVid {...props} />}
            />
            <Route path="/upload" component={Upload} />
            <Route exact path="/" component={Main} />
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
