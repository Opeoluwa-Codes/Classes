const mongoose = require("mongoose");
const crypto = require("crypto");
const bcrypt = require("bcrypt");


const OurModel = require("../models/usermodel");


const userService = () =>{

    const Registration = async (req, res)=>{

        const newUser = new OurModel();
        newUser.Name = req.body.Name;
        newUser.Email = req.body.Email;
        newUser.DateOfBirth = req.body.DateOfBirth;
        newUser.Address = req.body.Address;
        newUser.Bio = req.body.Bio;
        newUser.Password = req.body.Password

        const saltRound = 10;

        const hash = bcrypt.hashSync(req.body.Password, saltRound);

        // console.log(hash);

        newUser.Password = hash;

        newUser.save()

        // res.status(201).json({
        //     Name: newUser.Name,
        //     Email: newUser.Email,
        //     DateOfBirth: newUser.DateOfBirth,
        //     Address: newUser.Address,
        //     Bio: newUser.Bio,
        // })

        .then(()=>res.send("You have successfullly been registered"))
        .catch(error=>{
            console.log(error)
            res.send("Registration is unsuccessful")
        })

    };

    const Access = async (req, res)=>{

        try{
            const userData = await OurModel.findOne({
                Email: req.body.Email,
            });
            if(userData){
                let ifPasswordIsCorrect = bcrypt.compareSync(
                    req.body.Password,
                    userData.Password
                );
                if (ifPasswordIsCorrect){
                    res.json({
                        message: "Successful",
                        data: userData
                    })
                }else{
                    res.send("Not successful")
                }
            }else{
                res.send("Email and Password not found")
            }
        }catch(error){
            res.send("Error")
        }

    }

    return {Registration, Access}

};

module.exports = userService;