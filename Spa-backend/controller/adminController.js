const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcrypt")
const generateToken = require("../utils/jwt.js")
const Admin = require('../module/adminModule.js');

// Middleware to protect routes
const authMiddleware = require('../middleWare/authMiddleWare.js');


// Register a new admin
const registerAdmin = async (req, res, next) => {
    const { email, password } = req.body;

    try {
        // Check if the admin already exists
        const existingAdmin = await Admin.findOne({ email });
        if (existingAdmin) {
            return res.status(401).json({message:"Admin exists"});
        }
//create admin
const admin = await Admin.create({email, password});

//Generate token
const token= generateToken(admin._id);
res.status(201).json({message:"token created", token})

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Save the new user to the database
        const user = new User({ email, password: hashedPassword });
        await user.save();
        res.status(202).json({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const loginAdmin =  async (req, res, next) => {
    const { email, password } = req.body;

    try {
        //validate email and password
        if(!email || !password){
            return  res.status(402).json({message:"incorrect details"});
        }
        const admin = await Admin.findOne({ email });
        if (!admin) {return  res.status(403).json({message:"Admin not found"});
        }
    //check for password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
            return  res.status(401).json({message:"Invalid password"});
    }
    //generate token
    const token = generateToken(admin._id);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
const getCurrentAdmin = async (req, res, next)=>{
    try{
        const admin = await Admin.findById(req.admin.id);
        res.status(200).json({message:"successful", admin})
    }catch(err){
        next(err);
    }
}

module.exports = {
loginAdmin,
registerAdmin,
getCurrentAdmin
  };
