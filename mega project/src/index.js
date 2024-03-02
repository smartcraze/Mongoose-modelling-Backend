import dotenv from "dotenv"

import connectDB from "./db";

dotenv.config




connectDB()
















/*
import express from "express";
const app = express()


;(asyn()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        app.on("error",(error)=>{
            console.log("ERR:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`);
        })


    }
    catch (error){
        console.log("Error connecting to the database: ", error);
        throw err
    }
  })()

*/