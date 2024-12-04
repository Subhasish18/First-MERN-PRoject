import mongoose from "mongoose";

const OrderprocessSchema = new mongoose.Schema({
    product_id:{type:String, required:true},
    user_id:{type:String, required:true}
  });


const Order= mongoose.model('Order',OrderprocessSchema);


export default Order;