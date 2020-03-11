const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const api = require("./api");
const cors = require("cors");
const authRouter = require("./router");
const hostName = "192.168.100.111";

mongoose.connect("mongodb://localhost:27017/ppl", function(err, result) {
  if (err) throw err;
  console.log("created");
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/auth", authRouter);
app.listen(9000, hostName, () => {
  console.log("chala");
});
