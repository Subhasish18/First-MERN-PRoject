import express from 'express';


const app=express()

app.get('/',(res,req) =>{
    console.log('This is an API');
    res.json({msg:"This is by SD"})
})

app.listen(5000, () =>{
    console.log('Server started at 5000 port'); 
})