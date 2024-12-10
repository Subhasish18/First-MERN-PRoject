import express from "express";
import { getAllProducts } from "../controller/ProductController.js";



const router = express.Router();

router.get("/", getAllProducts)

export default router