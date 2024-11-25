const express = require("express");

const app = express();
app.use(express.json());


const connectToDatabase = require("./src/config/dataBase")
connectToDatabase();

const userRoute = require("./src/routes/userRoute");
app.use("/api/v0/users", userRoute)

const PORT = 2500;
const port = process.env.PORT || 2500;
app.listen(port, console.log("Port:", port));
