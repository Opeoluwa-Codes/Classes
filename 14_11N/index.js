
// download postman and mongodb

const express = require("express");

const mongoose = require("mongoose")

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://oluwafemiopeoluwaoluwaseun:k4c7kRVVDeAJcg9u@cluster0.mdv54.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> console.log("DB Connected"))
.catch(err=> console.log(err))

const childSchema = new mongoose.Schema({

    name:{
        type: String,
        require: true
    },

    age:{
        type: Number,
        require: true
    },

    gender: {
        type: String,
        require: true
    },

    stateofOrigin: {
        type: String,
        require: true
    }

})

const userModel = new mongoose.model("Orphans", childSchema)

app.post("/addnewChild", (req, res) =>{

    console.log(req.body);
    const newChild = new userModel();
    newChild.name = req.body.name;
    newChild.age = req.body.age;
    newChild.gender = req.body.gender;
    newChild.stateofOrigin = req.body.stateofOrigin;

    newChild.save()
    .then(() => res.send("Child registration successful"))
    .catch(err =>{
        console.log(err)
        res.send("Child could not be added")
    })

})

app.get("/listofOrphans", (req, res) =>{

    userModel.find()

    .then(data =>{
        console.log(data)
        res.json({
            message: "list found",
            data
        })
    })

    .catch(err =>{
        console.log(err)
        res.send("Retrieval failed")
    })

})


app.get("/", (req, resp)=>{

    resp.json({
        message: "Welcome to our backend application"
    })

})

app.get("/liftofusers", (req, res) =>{

})

app.post("/signup", (req, res) =>{
    
    console.log(req.body);
    res.send("Request received")

})

const port = process.env.PORT || 5120;


app.listen(port, console.log("Port:", port))                                                                                                                                                                                           