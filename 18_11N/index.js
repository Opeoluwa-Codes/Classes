

const express = require("express");
const PORT = 1811;

const app = express();

app.use(express.json());

// something has to appear to the frontend guy - DEFAULT GET

app.get("/", (req, res) =>{

    res.json({
        message: "Our server is up and running"
    })

})

// status code..for every response the user gets, there has to be a status code guiding the response...res.status(200) (404)... res.json...

const port = process.env.PORT || 1811;

app.listen(port, console.log("Port:", port));

// middleware

// connect to database

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://oluwafemiopeoluwaoluwaseun:lFXyX20ryRFHXdDx@cluster0.e4mfr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("Connected to Database"))
.catch(error=>console.log(error))

// ceating schema

const dataEntry = new mongoose.Schema({

    name:{
        type: String
    },
    adminNo:{
        type: String,
        unique: true
    },
    age:{
        type: String
    },
    gender:{
        type: String
    },
    schoolFee:{
        type: Boolean
    }

});

const entryModel = new mongoose.model("studentData", dataEntry);

// controller

