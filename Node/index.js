import express from 'express';
import dotenv from 'dotenv'; // Import dotenv to load environment variables
import productRoutes from "./route/productRoutes.js";
import CartRoute from "./route/CartRoute.js";
import {connectDB} from "./db.js";
import bodyParser from 'body-parser';
import cors from 'cors'


// Load environment variables from .env file
dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

console.log(process.env.PORT)
const PORT = process.env.PORT || 5000;


app.use("/api/products",productRoutes);
app.use("/api/carts",CartRoute);


// Start the server
app.listen(5000,() =>{
    console.log("Server is running on http://localhost:"+PORT);
    connectDB();
});