const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    emailAddress:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    penName:{
        type: String,
        required: true
    },
});


const authorModel = new mongoose.model("Authors", authorSchema);
module.exports = authorModel;