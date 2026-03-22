import express from "express";
import {
  createOrder,
  verifyPayment,
  getPaymentByBooking,
  getPaymentsByUser,
} from "../controllers/payment.controller.js";

const router = express.Router();

router.post("/create-order", createOrder);
router.post("/verify-payment", verifyPayment);
router.get("/by-booking/:bookingId", getPaymentByBooking);
router.get("/by-user/:userId", getPaymentsByUser);

export default router;