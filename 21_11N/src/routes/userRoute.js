const express = require("express")

const userService = require("../services/userService")

const userRouter = express.Router();

userRouter.get("/", (req, res) =>{
    res.send("Welcome to the user route")
})

userRouter.post("/signup", userService().SignUp)
userRouter.post("/signin", userService().SignIn)

module.exports = userRouter;