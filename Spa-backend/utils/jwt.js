const jwt = require("jsonwebtoken");


const generateToken = (id) =>{
    return jwt.sign({id}, process.env.JWT_TOKEN, {
        expiresIn:"1h"
    });
};

const verifyToken = (token) =>{
    return jwt.verify(token, process.env.JWT_SECRET);
};
module.exports = {
    generateToken,
    verifyToken
};


