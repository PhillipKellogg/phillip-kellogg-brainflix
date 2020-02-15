import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Recommended from "./components/recommended/Recommended";
import Video from "./components/video/Video";
function App() {
  return (
    <div>
      <Header />
      <Video />
      <Recommended />
    </div>
  );
}

export default App;
