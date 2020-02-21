import React from "react";
// import Header from "./../header/Header";

export default function(props) {
  //   {
  // console.log(props);
  //   }
  return (
    <main>
      {/* <Header /> */}
      {/* this will render whatever you put inside the
        opening and closing <Page></Page> tags */}
      {props.children}
    </main>
  );
}
