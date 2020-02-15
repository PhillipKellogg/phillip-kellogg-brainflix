import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Recommended from "./components/recommended/Recommended";
import MainVideo from "./components/mainVideo/MainVideo";
import Comments from "./components/comments/Comments";

function App() {
  return (
    <div>
      <Header />
      <MainVideo />
    </div>
  );
}

export default App;
