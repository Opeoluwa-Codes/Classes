const mongoose = require("mongoose");

// const {Schema, model} = mongoose;
// destructure..then you can remove mongoose. from below.

const userSchema = new mongoose.Schema({

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

const userModel = new mongoose.model("Users", userSchema)

// what are we exporting here?

// module.exports = userModel;