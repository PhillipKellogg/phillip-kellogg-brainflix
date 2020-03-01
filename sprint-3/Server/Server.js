const express = require("express");
const app = express();
const videoInfo = require("./routes/videoInfo");
const videoList = require("./routes/videoList");
const upload = require("./routes/upload");
//I Wanna use prettier, I've lived without it before, those were dark days.
var cors = require("cors");
app.use(cors());

app.use(express.json());

app.use("/videos", videoList);
app.use("/videos", videoInfo);
app.use("/videos", upload);

app.listen(8080, function() {
  console.log("ahoy hoy");
});
