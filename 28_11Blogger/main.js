const express = require("express");

const app = express();
app.use(express.json());

const dataBase = require("./src/config/dataBase")
dataBase();

const authorRoute = require("./src/routes/authorRoute")
app.use("/api/v1/authors", authorRoute)

const PORT = 3000;
const port = process.env.PORT || 3000;
app.listen(port, console.log("Connected at port:", port));