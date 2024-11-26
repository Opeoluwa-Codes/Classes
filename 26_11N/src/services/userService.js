// services or controllers
// connecting to dbase, collecting info, sending back a reply

const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Model = require("../models/userModel");

const userService = () => {

    const SignUp = async (req, res) =>{

        try{
            const sameUser = await Model.findOne({
                emailAddress: req.body.emailAddress
            });

            if(sameUser){
                res.json({
                    message: "email address is taken"
                })
            }else{
                const newUser = new Model();
                newUser.firstName = req.body.firstName;
                newUser.lastName = req.body.lastName;
                newUser.emailAddress = req.body.emailAddress;
                newUser.phoneNumber = req.body.phoneNumber;
                newUser.type = req.body.type;
                newUser.password = req.body.password

                const saltRound = 10;
                // saltRound is a number of autogenerated characters... hashing rounds 2^10 times.. 10 or 12
                    const hash = bcrypt.hashSync(req.body.password, saltRound);
                    // const hash = await bcrypt.hash(req.body.password);

                // generate your salt and hash your password yourself

                    // const genSalt = bcrypt.genSalt(saltRound);
                    // const hash2 = bcrypt.hash(req.body.password, genSalt);

                    // const randomKey = crypto.randomBytes(64).toString("hex");
                    // const hash3 = crypto.scrypt(req.body.password, randomkey, 64).toString("hex");

                console.log(hash);
                // res.send("password hashed")
                newUser.password = hash;
    
                newUser.save()

                // res.status(201).json({
                //     firstName: newUser.firstName,
                //     lastName: newUser.lastName,
                //     emailAddress: newUser.emailAddress,
                //     phoneNumber: newUser.phoneNumber
                // })

                .then(() => res.send("User saved successfully"))
                .catch(err =>{
                    console.log(err)
                    res.send("An error has occured")
                })
            }
        }catch(err){
            res.send("An error has occured")
        };                 

    };

    const SignIn = async(req, res)=>{
        try{
            const userData = await Model.findOne({
                emailAddress: req.body.emailAddress,
            });
            if(userData){
                let isPasswordCorrect = bcrypt.compareSync(
                    req.body.password,
                    userData.password
                );
                if(isPasswordCorrect){
                    let token = await jwt.sign({emailAddress: req.body.emailAddress}, "abcdefghijkl")
                    console.log(token)
                    res.json({
                        message: "Welcome",
                        token,
                        data: userData,
                    });
                } else {
                    res.send("Not found")
                }
            }else{
                res.send("Not found")
            }
        } catch(err){
            res.send("An error has occured")
        }
    
    }

    const AllUsers = async (req, res) =>{
        
        Model.find()
        .then((data) =>{
            console.log(data);

            res.json({
                message: "List of Users:",
                data,
            });
        })
        .catch(err =>
            console.log(err)
        )

    }

    return {SignUp, SignIn, AllUsers}

};

module.exports = userService;