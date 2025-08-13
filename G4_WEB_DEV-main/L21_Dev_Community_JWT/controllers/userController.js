const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const generateToken = (user) =>{
    return jwt.sign({user},process.env.JWT_SECRET);
}

const registerUser = async (req,res) =>{
    const { firstName, lastName, emailId, password} = req.body;

    //VALIDATION

    if (!firstName || !emailId || !password){
        res.status(400).send({message:"Please Add all mandatory fields"});
    }

    //Check the user existing already in db or not
    const userExists = await User.findOne({emailId});
    if (userExists){
        res.status(400).json({message: "Already Exist"});
    }

    //CREATE USER IN YOUR DATABASE

    const newUser = await User.create({
        firstName,
        lastName,
        emailId,
        password
    });

    await newUser.save();
    const token = generateToken(newUser);


    
    res.status(201).json({
        message: "USER ADDED SUCCESSFULLY",
        token
    });
    
}


const loginUser = async (req,res) => {
    const { emailId, password} = req.body;

    //VALIDATION

    if (!emailId || ! password){
       return res.status(400).json({message: "ADD ALL DETAILS"});
    }

    const userExists = await User.findOne({emailId});
    console.log(userExists);

    if (!userExists){
        return res.status(400).json({message: "No user Found"});
    }

    if (req.body.password != userExists.password){
        console.log(req.body.password);
        return res.status(400).json({message: "Incorrect Password"});
    }
    const token = generateToken(userExists);

    return res.status(200).json({message: "LoggedIn", token});
    
}

module.exports = { registerUser, loginUser }