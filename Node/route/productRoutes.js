import express from "express";
import { getAllProductDetails, getAllProducts } from "../controller/ProductController.js";



const router = express.Router();

router.get("/", getAllProductDetails)
router.post("/getAllProducts", getAllProducts)

export default router