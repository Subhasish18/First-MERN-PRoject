import mongoose from "mongoose";
// import dotenv from 'dotenv';
// dotenv.config()

// export const conn= ()=>{mongoose.connect(process.env.MONGODB)};

export const conn= ()=>{
    mongoose.connect('mongodb+srv://admin:SubhasishDas24@cluster0.9ados.mongodb.net/ProjectBase?retryWrites=true&w=majority&appName=Cluster0')
};