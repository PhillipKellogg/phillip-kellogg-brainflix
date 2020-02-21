import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import MainVideo from "./components/mainVideo/MainVideo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import NotFound from "./components/NotFound";

import Upload from "./components/Upload/Upload";

import axios from "axios";
const herokuURL = "https://project-2-api.herokuapp.com/videos";
const herokuKey = "?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>";
const apiRequest = `${herokuURL}${herokuKey}`;
const videoIdno4 = "1a4kjruuedd9";
const vidIdRequest = `https://project-2-api.herokuapp.com/videos/:1aivjruutn6a?api_key=<f23538e5-0342-4d58-bbde-04e6a4ee4105>`;
axios
  .get(apiRequest)
  .then(res => {
    // const persons = res.data;
    console.log(res.data);
    // console.log(res);
  })
  .catch(error => console.error(error));
axios
  .get(vidIdRequest)
  .then(res => {
    // const persons = res.data;
    console.log(res.data);
    // console.log(res);
  })
  .catch(error => console.error(error));

// console.log()
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Route exact path="/" component={Header} /> */}
          <Route exact path="/" component={MainVideo} />
          <Route path="/upload" component={Upload} />
          {/* <Route component={NotFound} /> */}
        </Switch>{" "}
      </BrowserRouter>{" "}
    </div>
  );
}

export default App;
