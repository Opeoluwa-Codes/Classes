// connect to database
const mongoose = require("mongoose");

const connectToDatabase = () => {

    mongoose.connect("mongodb+srv://oluwafemiopeoluwaoluwaseun:lFXyX20ryRFHXdDx@cluster0.e4mfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>console.log("Connected to Database"))
    .catch(error=>console.log(error))

};

// export the code

module.exports = connectToDatabase;