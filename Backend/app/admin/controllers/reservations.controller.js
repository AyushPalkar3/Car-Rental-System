import prisma from "../../../lib/db.config.js";

const bookingInclude = {
  car: true,
  user: true,
  pricing: true,
  payment: true,
  coupon: true,
};

export const listAdminReservations = async (req, res) => {
  try {
    const bookings = await prisma.booking.findMany({
      include: bookingInclude,
      orderBy: { createdAt: "desc" },
    });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAdminReservationById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await prisma.booking.findUnique({
      where: { id },
      include: bookingInclude,
    });
    if (!booking) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.status(200).json(booking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createAdminReservation = async (req, res) => {
  try {
    const {
      carId,
      pricingId,
      userId,
      duration,
      totalPrice,
      bookingType,
      deliveryAddress,
      returnAddress,
      sameReturn,
      pickupDate,
      returnDate,
      status,
      color,
      hexCode,
      couponId,
    } = req.body;

    if (!carId || !pricingId || !userId || !pickupDate || !returnDate) {
      return res.status(400).json({
        message:
          "carId, pricingId, userId, pickupDate, and returnDate are required",
      });
    }

    const pricing = await prisma.pricing.findFirst({
      where: { id: pricingId, carId },
    });
    if (!pricing) {
      return res.status(400).json({ message: "Invalid pricing for this car" });
    }

    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const finalTotal =
      totalPrice != null && totalPrice !== ""
        ? parseInt(String(totalPrice), 10)
        : pricing.price;

    const booking = await prisma.booking.create({
      data: {
        carId,
        pricingId,
        userId,
        duration: duration || pricing.duration,
        totalPrice: Number.isFinite(finalTotal) ? finalTotal : pricing.price,
        bookingType: String(bookingType || "PICKUP").toUpperCase(),
        deliveryAddress: deliveryAddress || null,
        returnAddress: returnAddress || null,
        sameReturn: Boolean(sameReturn),
        pickupDate: new Date(pickupDate),
        returnDate: new Date(returnDate),
        status: status || "PENDING",
        color: color || null,
        hexCode: hexCode || null,
        couponId: couponId || null,
      },
      include: bookingInclude,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateAdminReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      carId,
      pricingId,
      userId,
      duration,
      totalPrice,
      bookingType,
      deliveryAddress,
      returnAddress,
      sameReturn,
      pickupDate,
      returnDate,
      status,
      color,
      hexCode,
      couponId,
    } = req.body;

    const existing = await prisma.booking.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ message: "Reservation not found" });
    }

    if (carId && pricingId) {
      const pricing = await prisma.pricing.findFirst({
        where: { id: pricingId, carId },
      });
      if (!pricing) {
        return res.status(400).json({ message: "Invalid pricing for this car" });
      }
    }

    if (userId) {
      const user = await prisma.user.findUnique({ where: { id: userId } });
      if (!user) {
        return res.status(400).json({ message: "User not found" });
      }
    }

    const data = {};
    if (carId != null) data.carId = carId;
    if (pricingId != null) data.pricingId = pricingId;
    if (userId != null) data.userId = userId;
    if (duration != null) data.duration = duration;
    if (totalPrice != null && totalPrice !== "") {
      data.totalPrice = parseInt(String(totalPrice), 10);
    }
    if (bookingType != null) {
      data.bookingType = String(bookingType).toUpperCase();
    }
    if (deliveryAddress !== undefined) data.deliveryAddress = deliveryAddress;
    if (returnAddress !== undefined) data.returnAddress = returnAddress;
    if (sameReturn !== undefined) data.sameReturn = Boolean(sameReturn);
    if (pickupDate != null) data.pickupDate = new Date(pickupDate);
    if (returnDate != null) data.returnDate = new Date(returnDate);
    if (status != null) data.status = status;
    if (color !== undefined) data.color = color;
    if (hexCode !== undefined) data.hexCode = hexCode;
    if (couponId !== undefined) data.couponId = couponId;

    const booking = await prisma.booking.update({
      where: { id },
      data,
      include: bookingInclude,
    });

    res.status(200).json(booking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const deleteAdminReservation = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await prisma.booking.findUnique({ where: { id } });
    if (!existing) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    await prisma.payment.deleteMany({ where: { bookingId: id } });
    await prisma.booking.delete({ where: { id } });
    res.status(200).json({ message: "Reservation deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
