const jwt = require("jsonwebtoken");
const authorModel = require("../models/authorModel");

const authValidation = (req, res, next)=>{
    console.log(req.headers.authorization);
    console.log(req.headers.authorization.split(" ")[1]);
    if (req.headers.authorization){
        let token = req.headers.authortization.split(" ")[1];

        let authorEmail = jwt.verify(token, "abcdefghijkl");

        if (authorEmail){
            let author = authorModel.findOne({
                emailAddress: authorEmail.emailAddress,
            })
            if (author){
                console.log("welcome")
                res.body = author
                next()
            }else{
                res.send("error")
            }
        }else{
            res.send("author not found")
        }
    }else{
        res.send("authorization failed")
    }
};

module.exports = authValidation;