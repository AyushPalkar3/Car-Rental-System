/**
 * Maps public listing sidebar labels to API / Prisma enum values returned on each car.
 */
export const fuelFilterToApi: Record<string, string> = {
  Petrol: "PETROL",
  Diesel: "DIESEL",
  Electric: "ELECTRIC",
  CNG: "CNG",
  Hybrid: "HYBRID",
};

export const transmissionFilterToApi: Record<string, string> = {
  Manual: "MANUAL",
  Automatic: "AUTO",
  "Semi Automatic": "SEMI_AUTO",
  "Semi-Automatic": "SEMI_AUTO",
};
