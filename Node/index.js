import express from 'express';
import mongoose from 'mongoose';

// import {conn} from './db.js'


const app=express()

app.get('/',(res,req) =>{
    console.log('This is an API');
    res.json({msg:"This is by SD"})
})

app.listen(5000, () =>{
    console.log('Server started at 5000 port'); 
})

// const conn= ()=>{
//     mongoose.connect(process.env.MONGODB)
// }

// app.listen(process.env.PORT || 8000, () =>{
//     console.log('Server Started at 5000 port....');
//     conn()
//     console.log('Database Connected');
// })