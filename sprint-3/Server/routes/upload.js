const express = require("express");
const router = express.Router();
const uuid = require("uuid/v4");
const fs = require("fs");

const videoInfo = require("../data/videoInfo.json");
const videoList = require("../data/videoList.json");

router.post("/", (req, res) => {
  const { body } = req;
  const videoListData = {
    ...body,
    id: `${uuid().substr(0, 6)}`,
    image: "https://i.redd.it/f7bx7svtb7o31.jpg"
  };

  const videoInfoData = {
    ...videoListData,
    timestamp: Date.now(),
    duration: "69:69",
    video: "https://project-2-api.herokuapp.com/stream",
    views: "2,043,765",
    likes: "400,058",
    channel: "Roy Lee Jr",
    comments: [
      {
        name: "Obama",
        comment: "big lul",
        id: `${uuid().substr(0, 6)}`,
        likes: 0,
        timestamp: Date.now()
      }
    ]
  };

  videoList.push(videoListData);
  fs.writeFileSync("./data/videoList.json", JSON.stringify(videoList, null, 2));
  videoInfo.push(videoInfoData);
  fs.writeFileSync("./data/videoInfo.json", JSON.stringify(videoInfo, null, 2));
  res.status(201).json(videoListData);
});

module.exports = router;
