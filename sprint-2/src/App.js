import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import MainVideo from "./components/mainVideo/MainVideo";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import NotFound from "./components/NotFound";

import Upload from "./components/Upload/Upload";
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
