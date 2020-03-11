const db = require("./model");
module.exports = {
  adduser: data => {
    return new Promise((resolve, reject) => {
      db.create(data, function(err, result) {
        if (err) reject(err);
        else resolve(result);
      });
    });
  },
  showuser: (Gmail, pass) => {
    return new Promise((resolve, reject) => {
      db.find({ Email: Gmail, Password: pass }, (err, result) => {
        if (err || result.length === 0) reject(err);
        else resolve(result);
      });
    });
  },
  checkusers: Gmail => {
    return new Promise((resolve, reject) => {
      db.find({ Email: Gmail }, (err, result) => {
        if (result.length == 0) reject(err);
        else resolve(result);
      });
    });
  },
  checkuser: Gmail => {
    return new Promise((resolve, reject) => {
      db.find({ Email: Gmail }, (err, result) => {
        if (result.length == 0) resolve(result);
        else reject(err);
      });
    });
  }
};
