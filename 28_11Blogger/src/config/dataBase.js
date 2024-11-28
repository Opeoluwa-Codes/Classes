const mongoose = require("mongoose");

const dataBase = () =>{
    mongoose.connect("mongodb+srv://oluwafemiopeoluwaoluwaseun:yNxv6HpT5kU1chdT@cluster0.ju9ek.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(()=>console.log("connected to database"))
    .catch(error=>console.log(error))
}

module.exports = dataBase;