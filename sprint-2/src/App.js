import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Upload from "./Components/Upload/Upload";

// console.log()
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Switch>
          {/* <Route exact path="/" component={Header} /> */}
          <Route exact path="/" component={Main} />
          <Route path="/upload" component={Upload} />
          {/* <Route component={NotFound} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
