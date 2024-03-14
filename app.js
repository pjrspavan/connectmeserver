const express = require('express')
const mongoose = require('mongoose')
const loginRouter = require('./routers/loginRouter')
const app = express()
app.use(express.json())
require('dotenv').config();
const cors = require('cors');
const signupRouter = require('./routers/signupRouter')
const ws = require('ws')
const PORT = 1111

mongoose.connect(process.env.MONGODB_CLUSTER)

app.use(cors())

app.get("/", (req,res)=>{
    console.log("Connectme...");
})

app.use("/api/signup", signupRouter);

app.use("/api/login", loginRouter)

const server = app.listen(PORT);


const wss = new ws.WebSocketServer({server});

wss.on('connection', (connection, request) => {
    console.log('WebSocket connection established');

    console.log("Request headers: ",request.headers)

    connection.on('close', () => {
      console.log('WebSocket connection closed');
    });
  
    connection.on('error', (error) => {
      console.error('WebSocket connection error:', error);
    });
  });