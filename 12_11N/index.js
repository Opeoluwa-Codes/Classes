const express = require("express");

const app = express();

app.use(express.json());

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

// install express
// npm i express
// install nodemon
// npm i nodemon