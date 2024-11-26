import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config()

export const conn= ()=>{mongoose.connect(process.env.MONGODB)};

