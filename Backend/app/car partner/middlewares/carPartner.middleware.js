import jwt from "jsonwebtoken";
import prisma from "../../../lib/db.config.js";

export const carPartnerAuthMiddleware = async (req, res, next) => {
    try {
        const token = req?.headers?.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({
                message: "Token is missing"
            });
        }
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);

        if (decodedToken?.role !== "CAR_PARTNER" || !decodedToken?.id) {
            return res.status(401).json({ message: "Unauthorized" });
        }

        const partner = await prisma.carPartner.findUnique({
            where: { id: decodedToken.id },
            select: { deletedAt: true },
        });
        if (!partner || partner.deletedAt) {
            return res.status(403).json({ message: "Account no longer active" });
        }

        req.carPartner = decodedToken;
        next();
    } catch (error) {
        res.status(401).json({
            message: "Invalid or expired token",
        });
    }
};
