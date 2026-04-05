import prisma from "../../../lib/db.config.js";
import {
    CAR_DELETE_REASON_PARTNER_DELETED,
    softDeleteCarInTransaction,
} from "../../utils/fleetSoftDelete.js";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const getAllCarPartner = async (req, res) => {
    try {
        const rows = await prisma.carPartner.findMany({
            include: {
                _count: {
                    select: { cars: true },
                },
            },
            orderBy: { createdAt: "desc" },
        });
        const carPartners = rows.filter((p) => p.deletedAt == null);
        res.status(200).json(carPartners);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching car partners",
            error
        });
    }
};

const ALLOWED_CAR_PARTNER_STATUS = ["Active", "Inactive"];

export const updateCarPartnerStatus = async (req, res) => {
    try {
        const { id } = req.params;
        const { status } = req.body || {};
        if (!status || !ALLOWED_CAR_PARTNER_STATUS.includes(status)) {
            return res.status(400).json({
                message: `status must be one of: ${ALLOWED_CAR_PARTNER_STATUS.join(", ")}`,
            });
        }
        const existing = await prisma.carPartner.findUnique({
            where: { id },
            select: { deletedAt: true },
        });
        if (!existing) {
            return res.status(404).json({ message: "Car partner not found" });
        }
        if (existing.deletedAt) {
            return res.status(400).json({ message: "Car partner has been removed" });
        }
        const updated = await prisma.carPartner.update({
            where: { id },
            data: { status },
            include: {
                _count: {
                    select: { cars: true },
                },
            },
        });
        res.status(200).json(updated);
    } catch (error) {
        if (error?.code === "P2025") {
            return res.status(404).json({ message: "Car partner not found" });
        }
        res.status(500).json({
            message: "Error updating car partner status",
            error: error?.message || String(error),
        });
    }
};

/** Admin: update partner profile fields (phone is immutable). */
export const updateCarPartnerByAdmin = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email, address } = req.body || {};

        if (name === undefined || !String(name).trim()) {
            return res.status(400).json({ message: "Name is required" });
        }
        if (email === undefined || !String(email).trim()) {
            return res.status(400).json({ message: "Email is required" });
        }
        const emailTrim = String(email).trim();
        if (!EMAIL_REGEX.test(emailTrim)) {
            return res.status(400).json({ message: "Invalid email address" });
        }

        const addressNorm =
            address === undefined || address === null || !String(address).trim()
                ? null
                : String(address).trim();

        const existing = await prisma.carPartner.findUnique({
            where: { id },
            select: { deletedAt: true },
        });
        if (!existing) {
            return res.status(404).json({ message: "Car partner not found" });
        }
        if (existing.deletedAt) {
            return res.status(400).json({ message: "Car partner has been removed" });
        }

        const updated = await prisma.carPartner.update({
            where: { id },
            data: {
                name: String(name).trim(),
                email: emailTrim,
                address: addressNorm,
            },
            include: {
                _count: {
                    select: { cars: true },
                },
            },
        });
        res.status(200).json(updated);
    } catch (error) {
        if (error?.code === "P2025") {
            return res.status(404).json({ message: "Car partner not found" });
        }
        res.status(500).json({
            message: "Error updating car partner",
            error: error?.message || String(error),
        });
    }
};

/** Soft-delete partner: all their cars removed from fleet; active/upcoming bookings cancelled. */
export const deleteCarPartnerByAdmin = async (req, res) => {
    try {
        const adminId = req.admin?.id;
        if (!adminId) return res.status(403).json({ message: "Forbidden" });

        const partnerId = req.params.id;
        const existing = await prisma.carPartner.findUnique({
            where: { id: partnerId },
            include: {
                cars: { select: { id: true, deletedAt: true } },
            },
        });

        if (!existing) {
            return res.status(404).json({ message: "Car partner not found" });
        }
        if (existing.deletedAt) {
            return res.status(400).json({ message: "Car partner already removed" });
        }

        const now = new Date();
        const phoneSuffix = `__deleted__${Date.now()}`;

        const summary = await prisma.$transaction(async (tx) => {
            let cancelledBookings = 0;
            let carsSoftDeleted = 0;
            for (const car of existing.cars) {
                if (car.deletedAt != null) continue;
                cancelledBookings += await softDeleteCarInTransaction(
                    tx,
                    car.id,
                    now,
                    CAR_DELETE_REASON_PARTNER_DELETED
                );
                carsSoftDeleted += 1;
            }

            await tx.carPartner.update({
                where: { id: partnerId },
                data: {
                    deletedAt: now,
                    status: "Inactive",
                    phoneNum: `${existing.phoneNum}${phoneSuffix}`,
                },
            });

            return { cancelledBookings, carsSoftDeleted };
        });

        res.status(200).json({
            message: "Car partner deleted",
            softDeleted: true,
            ...summary,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error deleting car partner",
            error: error?.message || String(error),
        });
    }
};