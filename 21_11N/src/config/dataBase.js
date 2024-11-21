const mongoose = require("mongoose")

const connectToDatabase = () => {

    mongoose.connect("mongodb+srv://oluwafemiopeoluwaoluwaseun:iU3luMCZbY8R0nfc@cluster0.tthvg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>console.log("Connected to Database"))
    .catch(error=>console.log(error))

};

module.exports = connectToDatabase;