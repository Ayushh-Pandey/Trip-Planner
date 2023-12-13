const express = require("express");
const {createHotel,updateHotel,deleteHotel,getAllHotels,getHotelById,getHotelRooms,countByCity,countByType} = require("../controllers/hotels");
const {verifyAdmin} = require("../utils/verifyToken");
const upload = require("../utils/upload")
const router = express.Router();

//create
router.post("/",verifyAdmin,createHotel);
//update
router.put("/:id",verifyAdmin,updateHotel);
//delete
router.delete("/:id",verifyAdmin,deleteHotel);
//get ALL 
router.get("/",getAllHotels);
router.get("/countByCity",countByCity);
router.get("/countByType",countByType);
//get by id
router.get("/find/:id",getHotelById);
router.get("/rooms/:id",getHotelRooms);

module.exports = router;