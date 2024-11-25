const mongoose = require("mongoose");

const connectToDatabase = () =>{

    mongoose.connect("mongodb+srv://oluwafemiopeoluwaoluwaseun:kTuCSFjtJntDzI3Z@cluster0.2xknq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>console.log("You have connected successfully to the database"))
    .catch(error=>console.log(error))

};

module.exports = connectToDatabase;