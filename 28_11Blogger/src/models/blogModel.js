const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    body:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "authorModel"
    }

});

const userModel = new mongoose.model("users", userSchema);
module.exports = userModel;