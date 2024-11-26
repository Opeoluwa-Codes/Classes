const jwt = require("jsonwebtoken")

const validateUser = (req, res, next) =>{

    if(req.headers.authorization){
        let token = req.headers.authorization.split(" ")[1];
        let userEmail = jwt.verify(token, "abcdefghijkl");
    }else{
        res.send("You can not access this route")
    }
    console.log(req.headers.authorization);
    console.log(req.headers.authorization.split(" ")[1]);
    // next();
};

module.exports = validateUser;

// dev genius understanding and working with middleware in expressjs