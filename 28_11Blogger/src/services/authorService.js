const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")

const authorModel = require("../models/authorModel")

const authorServices = () =>{
    const signup = async (req, res) =>{
        try{
            const author = await authorModel.findOne({
                emailAddress: req.body.emailAddress
            })
            if(author){
                res.json({
                    message: "email address is taken"
                })
            }else{
                const registerAuthor = new authorModel();
                registerAuthor.firstName = req.body.firstName;   
                registerAuthor.lastName = req.body.lastName;  
                registerAuthor.emailAddress = req.body.emailAddress;  
                registerAuthor.password = req.body.password;  
                registerAuthor.penName = req.body.penName;     
                
                const saltRound = 12;
                const hash = bcrypt.hashSync(req.body.password, saltRound);
                console.log(hash);
                registerAuthor.password = hash;

                registerAuthor.save()

                .then(()=>res.send("You have signed up successfully"))
                .catch(err=>{
                    console.log(err)
                    res.send("error")
                })

            }
        }catch(err){
            res.send("error")
            console.log(err.message)
        }
    }

    const signin = async (req, res) =>{
        try{
            const user = await authorModel.findOne({
                emailAddress: req.body.emailAddress
            });
            if(user){
                let checkPassword = bcrypt.compareSync(
                    req.body.password,
                    user.password
                )
                if(checkPassword){
                    let token = await jwt.sign({
                        emailAddress: req.body.emailAddress
                    }, "abcdefghijkl")
                    res.json({
                        message: "Signed in successfully",
                        token,
                        data: user
                    })
                }else{
                    res.send("user not found")
                }
            }else{
                res.send("user not found")
            }

        }catch(err){
            res.send("error")
        }
    }

    return{signup, signin}
};

module.exports = authorServices;