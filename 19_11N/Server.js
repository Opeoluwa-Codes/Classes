const express = require("express");


const app = express();
app.use(express.json());

const connectToDatabase = require("./SRC/Config/DBConnect");
connectToDatabase();

// const User = require("./SRC/Routes/User")
// User();

const PORT = 1800;
const port = process.env.PORT || 1800;
app.listen(port, console.log("Port:", port));

// telling whoever is accessing that this Server.js is version one!

// app.use("/api/v1")