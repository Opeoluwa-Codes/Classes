const express = require("express");

const authorService = require("../services/authorService")

const authorRouter = express.Router();

authorRouter.get("/", (req, res) =>{
    res.send("this is the author router")
})

authorRouter.post("/signup", authorService().signup);
authorRouter.post("/signin", authorService().signin);

module.exports = authorRouter;