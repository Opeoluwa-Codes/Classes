const express = require("express")

const userService = require("../services/userService")
const validateUser = require("../middlewares/authvalidation")

const userRouter = express.Router();

userRouter.get("/", (req, res) =>{
    res.send("Welcome to the user route")
})


userRouter.post("/signup", userService().SignUp)
userRouter.post("/signin", userService().SignIn)
userRouter.post("/AllUsers", validateUser, userService().AllUsers)

// body - token is authorization - value will be token 

module.exports = userRouter;