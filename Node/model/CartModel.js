import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    product_id:{type:String, required:true},
    user_id:{type:String, required:true},
    quantity:{type:String, required:true},
    // isordered:{type:String, required:true},
    // isdelete:{type:String, required:true}S
  },{timestamps: true});


const Cart= mongoose.model('Cart',cartSchema);


export default Cart;