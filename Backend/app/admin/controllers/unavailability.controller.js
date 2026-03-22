import prisma from "../../../lib/db.config.js";

// Admin lists all unavailability requests (with optional status filter)
export const listAllUnavailabilityRequests = async (req, res) => {
  try {
    const { status } = req.query;
    const where = status ? { status } : {};

    const requests = await prisma.carUnavailabilityRequest.findMany({
      where,
      include: {
        car: { select: { id: true, name: true, thumbnail: true, isAvailable: true } },
        partner: { select: { id: true, name: true, phoneNum: true } },
      },
      orderBy: { createdAt: "desc" },
    });

    res.status(200).json({ count: requests.length, data: requests });
  } catch (error) {
    res.status(500).json({ message: "Error fetching requests", error: error.message });
  }
};

// Admin approves → car becomes unavailable
export const approveUnavailabilityRequest = async (req, res) => {
  try {
    const request = await prisma.carUnavailabilityRequest.findUnique({
      where: { id: req.params.id },
    });
    if (!request) return res.status(404).json({ message: "Request not found" });
    if (request.status !== "PENDING") {
      return res.status(400).json({ message: "Request is already processed" });
    }

    // Approve only — operational status (Upcoming → In Progress → Active) is derived from dates.
    // Do not toggle car.isAvailable here; block window is enforced via request + list status.
    const updatedRequest = await prisma.carUnavailabilityRequest.update({
      where: { id: req.params.id },
      data: {
        status: "APPROVED",
        adminNote: req.body.adminNote || null,
        updatedAt: new Date(),
      },
      include: { car: { select: { id: true, name: true } } },
    });

    res.status(200).json({
      message: "Block request approved.",
      data: updatedRequest,
    });
  } catch (error) {
    res.status(500).json({ message: "Error approving request", error: error.message });
  }
};

// Admin rejects → car stays available
export const rejectUnavailabilityRequest = async (req, res) => {
  try {
    const request = await prisma.carUnavailabilityRequest.findUnique({
      where: { id: req.params.id },
    });
    if (!request) return res.status(404).json({ message: "Request not found" });
    if (request.status !== "PENDING") {
      return res.status(400).json({ message: "Request is already processed" });
    }

    const updated = await prisma.carUnavailabilityRequest.update({
      where: { id: req.params.id },
      data: {
        status: "REJECTED",
        adminNote: req.body.adminNote || null,
        updatedAt: new Date(),
      },
      include: { car: { select: { name: true } } },
    });

    res.status(200).json({ message: "Request rejected.", data: updated });
  } catch (error) {
    res.status(500).json({ message: "Error rejecting request", error: error.message });
  }
};
