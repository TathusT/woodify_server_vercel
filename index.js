const line = require("@line/bot-sdk");
const express = require("express");
const axios = require("axios").default;
const bodyParser = require("body-parser");
var cors = require("cors");

// var corsOption = {
//   origin: true,
//   methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//   credentials: true,
//   optionsSuccessStatus: 200,
// };

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const lineConfig = {
  channelAccessToken: "lgOJd3BzZij3BujNXREFQZ9VrHYRnQoaBa0irWnzhNnkJTYXW5yDYomDYsbVqDZIFZ1HwnwcVsuxCFqbf/Fd7UxjZ0aHchxWGAx8/cbcDF5q82f+k5gqM3ocQSQd00aa+/IEo/kV7NLIm+QZX6VXbwdB04t89/1O/w1cDnyilFU=",
  channelSecret: "0b89248e5ea046b327297535b7ec3af1",
};

const client = new line.Client(lineConfig);

app.post("/webhook", async (req, res) => {
  try {
    const events = req.body.events;
    lineEvent
    res.status(200).send("OK");
  } catch (err) {
    res.status(500).end();
  }
});

const lineEvent = async (event) => {
  try {
    const uid = event.source.userId
    const message = event.message.text
    console.log(message, uid);
    if(message == 'ตรวจสอบพันธ์ุไม้'){
      return client.replyMessage(event.replyToken, { type: "text", text: "เปลี่ยน rich menu เรียบร้อยแล้ว" });
    }
  } catch (error) {
    console.error(error);
  }
};

app.post("/login", async (req, res) => {
  let profile = req.body.lineProfile;
  let uid = profile.userId;
  let urlRequest = `https://api.line.me/v2/bot/user/${uid}/richmenu/richmenu-e3a4dacebb2e510ebabac2775e3be330`;
  console.log(urlRequest);
  await axios.request({
    method: "POST",
    url: `${urlRequest}`,
    headers: {
      Authorization: `Bearer ` + lineConfig.channelAccessToken,
    },
  });
  res.json(profile);
});

app.get("/test", async (req, res) => {
    res.json("profile");
  });

app.listen(4000, function () {
  console.log("listening on port", this.address().port);
});
