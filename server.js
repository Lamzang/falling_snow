const express = require("express");
const app = express();

app.listen(8080, () => {
  console.log("서버실행중");
});

app.use(express.static(__dirname + "/dist"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});
