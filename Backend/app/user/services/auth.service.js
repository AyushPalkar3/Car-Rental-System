import prisma from "../../../lib/db.config.js";
import bcrypt from "bcrypt";
import { generateOTP } from "../../utils/otp.util.js";
import { generateTokens } from "../../utils/token.util.js";
import { sendOtpForTesting } from "../../../lib/developmentMailServer.js";

export const requestOTPService = async (phoneNum) => {
  const { otp, otpHash, expiresAt } = await generateOTP();

  await sendOtpForTesting(otp);

  const user = await prisma.user.upsert({
    where: { phoneNum },
    update: {
      otpHash,
      otpExpiresAt: expiresAt,
      otpAttempts: 0,
    },
    create: {
      phoneNum,
      otpHash,
      otpExpiresAt: expiresAt,
    },
  });
  console.log("OTP (dev only):", otp);

  return user.id;
};

export const verifyOTPService = async (phoneNum, otp) => {
  const user = await prisma.user.findUnique({ where: { phoneNum } });

  if (!user) throw new Error("User not found");
  if (!user.otpExpiresAt || user.otpExpiresAt < new Date())
    throw new Error("OTP expired");

  if (user.otpAttempts >= 5)
    throw new Error("Too many attempts");

  const isValid = await bcrypt.compare(otp, user.otpHash);
  if (!isValid) {
    await prisma.user.update({
      where: { phoneNum },
      data: { otpAttempts: { increment: 1 } },
    });
    throw new Error("Invalid OTP");
  }

  await prisma.user.update({
    where: { phoneNum },
    data: {
      isVerified: true,
      otpHash: null,
      otpExpiresAt: null,
      otpAttempts: 0,
    },
  });

  return generateTokens(user.id);
};
