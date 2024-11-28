const jwt = require("jsonwebtoken");
const User = require("../models/usermodel");

const validateUser = (req, res, next) => {
  // console.log(req.headers.authorization)
  // console.log(req.headers.authorization.split(" ")[1])
  if (req.headers.authorization) {
    let token = req.headers.authorization.split(" ")[1];
    let userEmail = jwt.verify(token, "abcdefghijkl");
    if (userEmail) {
      let user = User.findOne({
        emailAddress: userEmail.email,
      });
      if (user) {
        console.log("welcome to the site");
        next();
      } else {
        res.send("You cannot access this route");
      }
    } else {
      res.send("You cannot access this route");
    }
    console.log(userEmail);
  } else {
    res.send("You cannot access this route");
  }
};

module.exports = validateUser;
