const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const blogService =()=>{
    const addBlog = async (req, res)=>{
        // try{
        //         const blogInput = new authorModel();
        //         blogInput.title = req.body.firstName;   
        //         blogInput.body = req.body.lastName;  
        //         blogInput.description = req.body.emailAddress;  
        //         blogInput.image = req.body.password;  
        //         blogInput.author = req.body.author;   
        //         blogInput.save()
        //         .then(()=>res.send("You have signed up successfully"))
        //         .catch(err=>{
        //             console.log(err)
        //             res.send("error")
        //         })

        //     }
        // }catch(err){
        //     res.send("error")
        //     console.log(err.message)
        // }
    }
    return{
        addBlog
    }
};
module.exports = blogService;