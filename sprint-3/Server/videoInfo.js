const express = require("express");
const router = express.Router();
const videoInfo = require("./data/videoInfo.json");
router.get("/:id", (req, res) => {
  //   const videoInfo;
  const video = videoInfo.find(item => {
    return item.id === req.params.id;
  });
  res.send(video);
});
// router.get("/:id", (req, res) => {
//   const itemId = req.params.id;
//   const item = videoInfo.find(_item => _item.id === itemId);
//   if (item) {
//     res.json(item);
//   } else {
//     res.send("Error");
//   }
// });

module.exports = router;
