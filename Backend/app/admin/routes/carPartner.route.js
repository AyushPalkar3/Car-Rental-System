import { getAllCarPartner } from "../controllers/carPartner.controller.js";
import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();
router.use(authMiddleware);

router.get("/", getAllCarPartner);

export default router;