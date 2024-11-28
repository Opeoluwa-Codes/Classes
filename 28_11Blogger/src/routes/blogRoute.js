const express = require("express");

const blogService = require("../services/blogService")
const authValidation = require("../middlewares/authValidation")

const blogRouter = express.Router();

blogRouter.get("/", (req, res) =>{
    res.send("this is the blog router")
})

blogRouter.post("/addBlog", authValidation, blogService().addBlog);

module.exports = blogRouter;