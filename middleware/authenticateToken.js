const express = require('express')
const jwt = require('jsonwebtoken');


const authenticateToken=(request, response, next)=>{
    const token = request.cookies.token;
    console.log(token)
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user)=>{
        if(err) return response.sendStatus(403)
        request.user = user;
        console.log("Authenticated!")
        next();
    })
}

module.exports = authenticateToken;