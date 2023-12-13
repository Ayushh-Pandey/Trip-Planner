const express = require("express");
const { updateUser, deleteUser, getAllUser, getUserById } = require("../controllers/users");
const {verifyAdmin,verifyUser} = require("../utils/verifyToken");
const router = express.Router();

//update
router.put("/:id",verifyUser,updateUser);
//delete
router.delete("/:id",verifyUser,deleteUser);
//get ALL 
router.get("/",verifyAdmin,getAllUser);
//get by id
router.get("/:id",verifyUser,getUserById);

module.exports = router;