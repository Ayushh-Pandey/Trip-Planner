const User = require("../models/usersSchema");
const bcrypt = require("bcryptjs");
const createError = require("../utils/error");
const jwt  = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const register = async(req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new User({
            // username:req.body.username,
            // email:req.body.email,
            ...req.body,
            password:hash,
        });
        const user1 = await User.findOne({username: newUser.username})
        if(user1)
            return next(createError(404,"Username already taken, Please choose a different username"))
        
        const email1 = await User.findOne({email: newUser.email})
        if(email1)
            return next(createError(404,"Email already registered"));
        await newUser.save();
        res.status(200).send("user has been created");
    } catch (error) {
        next(error);
    }
};

const login = async(req,res,next)=>{
    try {
        const user = await User.findOne({username:req.body.username});
        if(!user)
            return next(createError(404,"wrong username or password"));
        const isPasswordCorrect = await bcrypt.compare(req.body.password,user.password);
        if(!isPasswordCorrect)
            return next(createError(404,"wrong username or password"));
        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin},process.env.JWT)
        const{password,isAdmin,...otherDetails}=user._doc;
        res.cookie("access_token",token,{
            httpOnly:true,

        }).status(200).json({details:{...otherDetails},isAdmin});
    } catch (error) {
        next(error);
    }
};
module.exports = {register,login};