const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

    Name:{
        type:String,
        required: true

    },
    Email:{
        type:String,
        required: true
    },
    DateOfBirth:{
        type:String,
        required: true
    },
    Address:{
        type:String,
        required: true
    },
    Bio:{
        type:String,
        required: true
    },
    Password:{
        type:String,
        required: true
    }

})

const OurModel = new mongoose.model("Users", userSchema)

module.exports = OurModel;