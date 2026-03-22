import express from "express";
import {authMiddleware} from '../middlewares/auth.js'
import { getUser, updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", authMiddleware,getUser);
router.patch("/",authMiddleware, updateUser);

export default router;