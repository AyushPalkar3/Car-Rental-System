/** Reason stored on cancelled bookings when admin removes a single car from fleet. */
export const CAR_DELETE_REASON_ADMIN =
  "Vehicle removed from fleet (car deleted by admin)";

/** Reason when admin removes the car partner; all their cars are withdrawn. */
export const CAR_DELETE_REASON_PARTNER_DELETED =
  "Fleet withdrawn (car partner account deleted by admin)";

/**
 * Cancel active/upcoming bookings and soft-delete one car. Must run inside prisma.$transaction.
 * @param {import("@prisma/client").Prisma.TransactionClient} tx
 * @param {string} carId
 * @param {Date} now
 * @param {string} cancellationReason
 * @returns {Promise<number>} number of bookings cancelled
 */
export async function softDeleteCarInTransaction(tx, carId, now, cancellationReason) {
  const cancelled = await tx.booking.updateMany({
    where: {
      carId,
      OR: [
        { status: "PENDING" },
        { status: "CONFIRMED", returnDate: { gte: now } },
      ],
    },
    data: {
      status: "CANCELLED",
      cancellationReason,
      cancelledAt: now,
    },
  });

  await tx.car.update({
    where: { id: carId },
    data: {
      deletedAt: now,
      isAvailable: false,
      featured: false,
    },
  });

  return cancelled.count;
}
