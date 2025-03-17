import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import dbConnection from "./database/dbConnection.js";
import {errorMiddleware} from './error/error.js'
import Reserationroutes from './routes/Reserationroutes.js'
const app=express()
dotenv.config({path:'./config/config.env'});
app.use(cors({  origin: [process.env.FRONTEND_URL], methods: ['POST'],   credentials: true,
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1/reservation',Reserationroutes);
dbConnection()
app.use(errorMiddleware);
export default app;

// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';
// jab default use kar export karte hai to {} under nahi likhate hai 
// import dbConnection from "./database/dbConnection.js";
//exsko direct export kar diye hai esiliye
// import {errorMiddleware} from './error/error.js'
// import Reserationroutes from './routes/Reserationroutes.js'
// const app=express()
//eske vajah se server run karega 

// dotenv.config({path:'./config/config.env'});
// ye fronend se connect karenge karne liye

// CORS middleware configuration
// app.use(cors({
    // Allow requests from the specified origin(s)
    // origin: [process.env.FRONTEND_URL],
    // Allow only POST methods
    // methods: ['POST'],
    // Allow credentials to be included in requests
//     credentials: true,
// }));

// Middleware to parse JSON payloads,app.use(express.json()): This middleware parses incoming requests with JSON payloads. The parsed data is available in req.body
// app.use(express.json());

// Middleware to parse URL-encoded payloads,app.use(express.urlencoded({ extended: true })): This middleware parses incoming requests with URL-encoded payload
// app.use(express.urlencoded({ extended: true }));

// app.use('/api/v1/reservation',Reserationroutes);
// dbConnection()
// app.use(errorMiddleware);

// esko export kiye dusre me use karne ke liye
// export default app;