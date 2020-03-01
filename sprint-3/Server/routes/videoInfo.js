const express = require("express");
const router = express.Router();
const videoInfo = require("./../data/videoInfo.json");
router.get("/:id", (req, res) => {
  const video = videoInfo.find(item => {
    return item.id === req.params.id;
  });
  res.send(video);
});

module.exports = router;
