const express = require('express')
const expressAsyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const CORS = require('../middleware/cors.js');


const loginRouter = express.Router();

// CORS middleware
loginRouter.use(CORS);

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
        const token = jwt.sign({ email: email}, process.env.JWT_SECRET_KEY);

        const user = {
            email:existingUser.email,
            firstName:existingUser.firstName,
            lastName:existingUser.lastName,
            mobile:existingUser.mobile,
            newUser:existingUser.newUser,
            education:existingUser.Education,
            workExperience:existingUser.WorkExperience,
            connections:existingUser.Connections,
            interests:existingUser.Interests,
            userType:existingUser.userType,
            projects:existingUser.Projects
        }
        //RESPONSE
        response
        .cookie('token', token,
        {httpOnly:true,
        sameSite:'strict',
        secure:true})

        console.log("the user we are sending", user)
        
        response.status(200).json({ message: 'Login successful!', token:token, user:user});
        
    }catch(error){
        console.log(error)
        response
        .status(500).json({error:'Internal Error!'});
    }
}))


module.exports = loginRouter