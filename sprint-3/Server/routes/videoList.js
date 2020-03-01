const express = require("express");
const router = express.Router();
const videoList = require("./../data/videoList.json");
router.get("/", (_, res) => {
  res.send(videoList);
});
module.exports = router;
