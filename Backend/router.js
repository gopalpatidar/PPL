const express = require("express");
const app = express.Router();
const api = require("./api");
const apipost = require("./apipost");
const apicomment = require("./apicomment");
const apicategory = require("./apicategories");
const multer = require("multer");
const upload = multer({
  dest: "/home/com114/Documents/ppl/frontend/public/uploads"
});

app.post("/header", upload.single("Image"), async function(req, res) {
  var obj = req.body;
  let temp = 0;
  try {
    var name = obj["Email"];
    var data = await api.checkuser(name);
  } catch (err) {
    res.send(false);
    temp = 1;
  }
  if (temp == 0) {
    try {
      obj.Image = req.file.filename;
      await api.adduser(obj);
      res.send(true);
    } catch (err) {
      res.send(false);
    }
  }
});

app.post("/login", async function(req, res) {
  try {
    var obj = req.body;
    var name = obj["Email"];
    var pass = obj["Password"];
    var data = await api.showuser(name, pass);
    res.send(data);
    // res.send(str)
  } catch (err) {
    res.send("false");
  }
});

app.post("/check", async function(req, res) {
  try {
    var obj = req.body;
    obj = obj["Email"];
    var data = await api.checkusers(obj);
    res.send(true);
    // res.send(str)
  } catch (err) {
    res.send(false);
  }
});

// for user  post

app.post("/post", upload.single("Post"), async function(req, res) {
  var obj = req.body;
  let temp = 0;
  try {
    obj.Post = req.file.filename;
    var d = new Date();
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    obj.Date =
      d.getDate() +
      " " +
      months[d.getMonth()] +
      " " +
      d.getFullYear() +
      "    " +
      d.getHours() +
      ":" +
      d.getMinutes();
    obj.likes = [];
    obj.comments = [];
    await apipost.userpost(obj);
    res.send(true);
  } catch (err) {
    res.send(false);
  }
});

app.post("/showpost", async function(req, res) {
  try {
    var data = await apipost.showpost();
    res.send(data);
    // res.send(str)
  } catch (err) {
    res.send("false");
  }
});

// for Categorise

app.post("/categories", upload.single("Icon"), async function(req, res) {
  var obj = req.body;
  try {
    obj.Icon = req.file.filename;
    await apicategory.usercategory(obj);
    let data1 = req.body.Gmail;
    var data = await apicategory.showpost(data1);
    res.send(data);
  } catch (err) {
    res.send(false);
  }
});

app.post("/showcategory", async function(req, res) {
  try {
    let data1 = req.body.Gmail;
    var data = await apicategory.showpost(data1);
    res.send(data);
    // res.send(str)
  } catch (err) {
    res.send("false");
  }
});

// for comments

app.post("/comment", async function(req, res) {
  try {
    let obj = {};
    obj.Postid = req.body.Postid;
    obj.UserName = req.body.UserName;
    obj.Comments = req.body.Comments;
    await apicomment.addcoment(obj);
    let data = await apicomment.showcoment(obj.Postid);
    res.send(data);
  } catch (err) {
    res.send("false");
  }
});

app.post("/showcomment", async function(req, res) {
  try {
    let data1 = req.body.Postid;
    let data = await apicomment.showcoment(data1);
    res.send(data);
  } catch (err) {
    res.send("false");
  }
});

// for like post

app.post("/likepost", async function(req, res) {
  try {
    await apipost.likepost(req.body);
    var data = await apipost.showlikes(req.body);
    let likes = { like: data[0].likes.length };
       
    res.send(likes);
  } catch (err) {
    res.send("false");
  }
});
module.exports = app;
