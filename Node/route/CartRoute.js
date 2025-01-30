import express from "express";
import { getAllCarDetails, getAllCarts } from "../controller/CartController.js";

const router = express.Router();

router.get("/", getAllCarDetails)
router.post("/getAllCarts", getAllCarts)

export default router