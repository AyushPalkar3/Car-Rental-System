 import prisma from "../../../lib/db.config.js";

export const createBooking = async (req, res) => {
  try {
    const {
      carId,
      pricingId,
      userId,
      duration,
      totalPrice,
      totalAmount, // Legacy frontend property
      bookingType,
      deliveryAddress,
      deliveryLocation, // Legacy frontend property
      returnAddress,
      returnLocation, // Legacy frontend property
      sameReturn,
      pickupDate,
      startDate, // Legacy frontend property
      returnDate,
      endDate, // Legacy frontend property
      color,
      hexCode,
      orderId,
      paymentId,
      distanceKM,
      deliveryFee,
      car, // Passed sometimes in legacy payload
    } = req.body;

    // Graceful mapping to support older frontend payloads still in Redux cache
    const finalUserId = userId || req.user?.id; // If you add auth middleware later
    const finalTotalPrice = totalPrice || totalAmount;
    const finalDeliveryAddress = deliveryAddress || deliveryLocation;
    const finalReturnAddress = returnAddress || returnLocation;
    const finalPickupDate = pickupDate || startDate;
    const finalReturnDate = returnDate || endDate;
    
    // Extract duration from pricing array if missing
    let finalDuration = duration;
    if (!finalDuration) {
      if (car && car.pricing && car.pricing.length > 0) {
        finalDuration = car.pricing[0].duration;
      } else {
        finalDuration = "DAY"; // safe default
      }
    }

    if (!finalUserId) {
        return res.status(400).json({ message: "userId is required. Please restart checkout or login again." });
    }

    const booking = await prisma.booking.create({
      data: {
        carId,
        pricingId,
        userId: finalUserId,
        duration: finalDuration,
        totalPrice: finalTotalPrice,
        bookingType: bookingType?.toUpperCase() || "DELIVERY",
        deliveryAddress: finalDeliveryAddress,
        returnAddress: finalReturnAddress,
        sameReturn,
        pickupDate: finalPickupDate,
        returnDate: finalReturnDate,
        color,
        hexCode,
        orderId,
        paymentId,
        distanceKM,
        deliveryFee
      }
    });

    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getUserBookings = async (req, res) => {
  try {
    const { userId } = req.params;

    const bookings = await prisma.booking.findMany({
      where: { userId },
      include: {
        car: true,
        pricing: true
      }
    });

    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateBookingStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const booking = await prisma.booking.update({
      where: { id },
      data: { status }
    });

    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getBookingById = async (req, res) => {
  try {
    const { id } = req.params;
    const booking = await prisma.booking.findUnique({
      where: { id },
      include: {
        car: true,
        pricing: true,
        payment: true,
      },
    });
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json(booking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getDashboardStats = async (req, res) => {
  try {
    const { userId } = req.params;

    const [bookings, payments] = await Promise.all([
      prisma.booking.findMany({
        where: { userId },
        include: { car: { select: { name: true, images: true } }, pricing: true },
        orderBy: { createdAt: "desc" },
      }),
      prisma.payment.findMany({
        where: { userId, status: "SUCCESS" },
        include: { booking: { include: { car: { select: { name: true, images: true } } } } },
        orderBy: { createdAt: "desc" },
      }),
    ]);

    const statusCounts = bookings.reduce((acc, b) => {
      acc[b.status] = (acc[b.status] || 0) + 1;
      return acc;
    }, {});

    const totalSpent = payments.reduce((sum, p) => sum + (p.amount || 0), 0);

    res.json({
      totalBookings: bookings.length,
      statusCounts,
      totalSpent,
      recentBookings: bookings.slice(0, 5),
      recentPayments: payments.slice(0, 5),
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};