const jwt = require('jsonwebtoken');
const {verifyToken}= require ("../utils/jwt.js");
const Admin  = require ("../module/adminModule.js");


const protect = async (req, res, next) =>{
    let token;
    if(
        req.headers.authorization && req.headers.authorization.startsWith("Bearer")
    ){
        token = req.headers.authorization.split(" ")[1];
    }
    if (!token) {
        return res.status(401).json({message:"failed1, not authorised"});
    }

    try{
        const decoded = verifyToken(token);
        req.admin = await Admin.findById(decoded.id);
        
        if (!req.admin){
            return res.status(401).json({message:"unrecognised admin, not authorised"});
        }
        next();

    }catch (err){
        return  res.status(401).json({message:"not allowed to access route"});
    }
}
 module.exports = {
    protect
 };