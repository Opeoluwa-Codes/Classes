const express = require("express");

const app = express();
app.use(express.json());


// import database
const connectToDatabase = require("./src/config/dataBase");
connectToDatabase();

// import userRouter
const userRouter = require("./src/routes/userRoute")
app.use("/api/v1/users", userRouter)
// app level middleware above

//creating a port
const PORT = 1550;
const port = process.env.PORT || 1550;
app.listen(port, console.log("Port:", port));