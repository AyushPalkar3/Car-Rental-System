import prisma from "../../../lib/db.config.js";



export const getUser = async (req, res) => {
  const id = req.user.id;

  try {
    const user = await prisma.user.findUnique({
      where: { id },
      select: {
        id: true,
        phoneNum: true,
        firstName: true,
        lastName: true,
        aadhaarPdf:true,
        dlNumber:true,
        dlPdf:true,
        email:true,
        isVerified: true,
        isBlocked: true,
        lastLoginAt: true,
        address: true,
        createdAt: true,
        updatedAt: true,
      },
    });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch user",
      error: error.message,
    });
  }
};



export const updateUser = async (req, res) => {
    const id = req.user.id;
  const { firstName, lastName, email, address,aadhaarPdf,dlPdf,dlNumber } = req.body;

  try {
    const user = await prisma.user.update({
      where: { id },
      data: {
        ...(firstName && { firstName }),
        ...(lastName && { lastName }),
        ...(email && { email }),
        ...(aadhaarPdf && { aadhaarPdf }),
        ...(dlNumber && { dlNumber }),
        ...(dlPdf && { dlPdf }),
        ...(address && {
          address: {
            addressLine: address.addressLine,
            country: address.country,
            state: address.state,
            city: address.city,
            pincode: address.pincode,
          },
        }),
      },
    });

    res.status(200).json({
      message: "User updated successfully",
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update user",
      error: error.message,
    });
  }
};