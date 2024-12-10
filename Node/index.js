import express from 'express';
import dotenv from 'dotenv'; // Import dotenv to load environment variables
import productRoutes from "./routes/productRoutes.js";
import {connectDB} from "./db.js";

// Load environment variables from .env file
dotenv.config();

const app = express();

console.log(process.env.PORT)
const PORT = process.env.PORT || 5000;


app.use("/api/products",productRoutes);

// Start the server
app.listen(5000,() =>{
    console.log("Server is running on http://localhost:"+PORT);
    connectDB();
});