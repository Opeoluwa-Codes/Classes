const express = require("express");

const userService = require("../services/userService");

const userRouter = express.Router();


userRouter.get("/", (req, res) =>{
    res.send("This is our route")
})

userRouter.post("/Registration", userService().Registration)
userRouter.post("/Access", userService().Access)

module.exports = userRouter;