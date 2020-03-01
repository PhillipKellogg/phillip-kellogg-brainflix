const express = require("express");
const app = express();
const videoInfo = require("./videoInfo");
const videoList = require("./videoList");

var cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/videos", videoList);
app.use("/videos", videoInfo);

// app.use(express.static("public"));

//make an array and use a .find to get the ID === req.prarams.id

///famousdish
app.listen(8080, function() {
  console.log("ahoy hoy");
});
