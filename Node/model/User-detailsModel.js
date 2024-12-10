import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{type:String, required: [true, 'Please add a name']},
    email:{type:String, required:[true, 'Please add an email'], unique:true},
    address:{type:String, required:true},
    phone:{type:String, required:true},
    pin:{type:String, required:true},
    cartItems:[
      {
        quantity:{
          type: Number,
          default: 1
        },
        product:{
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
        }
      }
    ],
    role:{
      type: String,
      enum: ["customer", "admin"],
      default: "customer"
    }
  },   {
    timestamps: true,
  }
);


const User= mongoose.model('User',userSchema);


export default User;