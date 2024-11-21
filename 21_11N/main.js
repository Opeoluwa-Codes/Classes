const express = require("express");

const app = express();
app.use(express.json());


// import database
const connectToDatabase = require("./src/config/dataBase");
connectToDatabase();

// import userRouter
const userRouter = require("./src/routes/userRoute")
app.use("/api/v1/users", userRouter)

//creating a port
const PORT = 1500;
const port = process.env.PORT || 1500;
app.listen(port, console.log("Port:", port));