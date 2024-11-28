import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, required:true, unique:true},
    address:{type:String, required:true},
    phone:{type:String, required:true},
    pin:{type:String, required:true}
  });


const User= mongoose.model('User',userSchema);


export default User;