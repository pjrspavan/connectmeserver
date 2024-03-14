const express = require('express')
const expressAsyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const loginRouter = express.Router();

// CORS middleware
loginRouter.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
});

loginRouter.post('/', expressAsyncHandler(async(request, response)=>{
    const email = request.body.email;
    const password = request.body.password;
    try{
    
        //VALIDATING EMAIL AND PASSWORD
        const existingUser = await User.findOne({email});
        if(!existingUser) return response.status(401).json({error:"Invalid email or password!"});
    
        const passwordMatch = await bcrypt.compare(password, existingUser.password);
    
        if(!passwordMatch) return response.status(401).json({error:"Invalid email or password!"});

        //GENERATE TOKEN 
        const token = jwt.sign({ email: existingUser.email}, process.env.JWT_SECRET_KEY);
    
        //RESPONSE
        response
        .cookie('token', token,
        {httpOnly:true,
        sameSite:'strict',
        secure:true})
        
        response.status(200).json({ message: 'Login successful!', token});
        
    }catch(error){
        console.log(error)
        response
        .status(500).json({error:'Internal Error!'});
    }
}))


module.exports = loginRouter