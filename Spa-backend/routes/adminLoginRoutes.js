 const express = require("express");

 
const {
  
  registerAdmin,
  loginAdmin,
  getCurrentAdmin,
  

} = require("../controller/adminController.js");
const {protect} = require("../middleWare/authMiddleWare.js")
const router = express.Router();


router.post("/login", loginAdmin);
router.post("/register", registerAdmin);
router.get("/me",protect,  getCurrentAdmin);
module.exports = router;
