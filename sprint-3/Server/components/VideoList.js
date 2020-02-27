const express = require("express");
const router = express.Router();

// router.post("/soups", function(req, res) {
//   res.send("soups");
// });

router.get("/videos", function(_, res) {
  res.send(videoList);
});
module.exports = router;
