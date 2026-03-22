import express from "express";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import {
  listAdminReservations,
  getAdminReservationById,
  createAdminReservation,
  updateAdminReservation,
  deleteAdminReservation,
} from "../controllers/reservations.controller.js";

const router = express.Router();
router.use(authMiddleware);

router.get("/", listAdminReservations);
router.get("/:id", getAdminReservationById);
router.post("/", createAdminReservation);
router.put("/:id", updateAdminReservation);
router.delete("/:id", deleteAdminReservation);

export default router;
