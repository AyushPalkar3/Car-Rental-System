import prisma from "../../../lib/db.config.js";

export const getAllCarPartner = async (req, res) => {
    try {
        const carPartners = await prisma.carPartner.findMany();
        res.status(200).json(carPartners);
    } catch (error) {
        res.status(500).json({
            message: "Error fetching car partners",
            error
        });
    }
};