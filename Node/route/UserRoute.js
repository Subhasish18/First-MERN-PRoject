import express from "express";
import { getAllUserDetails, getUsers } from "../controller/UserController.js";

const router = express.Router();

router.post("/",  getUsers)
router.post("/getUsers", getAllUserDetails)

export default router