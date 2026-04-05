import {
    getAllCarPartner,
    updateCarPartnerStatus,
    updateCarPartnerByAdmin,
    deleteCarPartnerByAdmin,
} from "../controllers/carPartner.controller.js";
import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();
router.use(authMiddleware);

router.get("/", getAllCarPartner);
router.patch("/:id/status", updateCarPartnerStatus);
router.delete("/:id", deleteCarPartnerByAdmin);
router.patch("/:id", updateCarPartnerByAdmin);

export default router;