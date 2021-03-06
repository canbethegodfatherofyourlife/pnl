const express = require('express')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const cors=require("cors");

dotenv.config();
connectDB();

// const corsOptions ={
//    origin:'*', 
//    credentials:true,        
//    optionSuccessStatus:200,
// }

const app = express()

app.use(cors({
    'allowedHeaders': ['Content-Type'],
    'origin': '*',
    'preflightContinue': true
}));
app.use(bodyParser.json())
// app.use(cors(corsOptions))

// Available routes 
app.use('/auction',require('./routes/auction'))
app.use('/leaderboard',require('./routes/leaderboard'))
app.use('/profile',require('./routes/profile'))
app.use('/trading',require('./routes/trading'))

const PORT = process.env.PORT || 3005
app.listen(PORT,console.log(`Server Started on PORT ${PORT}`))