import dayjs, { Dayjs } from "dayjs";
import { useCallback, useEffect, useMemo, useState } from "react";
import apiClient from "../../../service/api/apiClient";
import {
  createReservation,
  getReservationById,
  updateReservation,
  type AdminReservationPayload,
  type BookingStatus,
  type DurationType,
} from "../../../service/api/reservations";

type UserLite = {
  id: string;
  phoneNum?: string;
  firstName?: string | null;
  lastName?: string | null;
  email?: string | null;
};

export type ApiCar = {
  id: string;
  name: string;
  brand: string;
  category?: string | null;
  modelYear: number;
  color: string;
  hexCode?: string;
  thumbnail?: string | null;
  images?: string[];
  pricing?: Array<{ id: string; duration: string; price: number }>;
  isAvailable?: boolean;
};

function tariffValueToDuration(val: string | undefined): DurationType {
  if (val === "1") return "WEEK";
  if (val === "3") return "MONTH";
  return "DAY";
}

function durationToTariffValue(d: DurationType): string {
  if (d === "WEEK") return "1";
  if (d === "MONTH") return "3";
  return "2";
}

function rentalValueToBookingType(val: string | undefined): "DELIVERY" | "PICKUP" {
  return val === "1" ? "DELIVERY" : "PICKUP";
}

function bookingTypeToRentalValue(t: string): string {
  return t === "DELIVERY" ? "1" : "2";
}

export function useReservationWizard(bookingId?: string) {
  const [cars, setCars] = useState<ApiCar[]>([]);
  const [users, setUsers] = useState<UserLite[]>([]);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [createdBookingId, setCreatedBookingId] = useState<string | null>(null);

  const [tariffValue, setTariffValue] = useState("2");
  const [rentalTypeValue, setRentalTypeValue] = useState("2");
  const [pickupDate, setPickupDate] = useState<Dayjs | null>(null);
  const [pickupTime, setPickupTime] = useState<Dayjs | null>(null);
  const [returnDate, setReturnDate] = useState<Dayjs | null>(null);
  const [returnTime, setReturnTime] = useState<Dayjs | null>(null);
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [returnAddress, setReturnAddress] = useState("");
  const [sameReturn, setSameReturn] = useState(false);
  const [carId, setCarId] = useState("");
  const [userId, setUserId] = useState("");
  const [explicitPricingId, setExplicitPricingId] = useState<string | null>(null);
  const [reservationStatus, setReservationStatus] =
    useState<BookingStatus>("PENDING");

  const imageBaseUrl = useMemo(() => {
    const base = (import.meta as unknown as { env?: { VITE_API_BASE_URL_IMAGE?: string } })
      .env?.VITE_API_BASE_URL_IMAGE;
    return typeof base === "string" ? base.replace(/\/$/, "") : "";
  }, []);

  const durationEnum = useMemo(
    () => tariffValueToDuration(tariffValue),
    [tariffValue]
  );

  const loadMeta = useCallback(async () => {
    setLoadError(null);
    try {
      const [carsRes, usersRes] = await Promise.all([
        apiClient.get<{ data?: ApiCar[]; count?: number }>("/cars"),
        apiClient.get<UserLite[]>("/admin/users"),
      ]);
      const carList = carsRes.data?.data ?? [];
      const userList = Array.isArray(usersRes.data) ? usersRes.data : [];
      setCars(carList);
      setUsers(userList);
    } catch (e: unknown) {
      const msg = e && typeof e === "object" && "message" in e ? String((e as { message: string }).message) : "Failed to load data";
      setLoadError(msg);
    }
  }, []);

  useEffect(() => {
    loadMeta();
  }, [loadMeta]);

  useEffect(() => {
    if (!bookingId) return;
    let cancelled = false;
    (async () => {
      try {
        const b = await getReservationById(bookingId);
        if (cancelled) return;
        setCarId(b.carId);
        setUserId(b.userId);
        setExplicitPricingId(b.pricingId);
        setTariffValue(durationToTariffValue(b.duration));
        setRentalTypeValue(bookingTypeToRentalValue(b.bookingType));
        setPickupDate(dayjs(b.pickupDate));
        setPickupTime(dayjs(b.pickupDate));
        setReturnDate(dayjs(b.returnDate));
        setReturnTime(dayjs(b.returnDate));
        setDeliveryAddress(b.deliveryAddress || "");
        setReturnAddress(b.returnAddress || "");
        setSameReturn(Boolean(b.sameReturn));
        setReservationStatus(b.status);
      } catch {
        if (!cancelled) setLoadError("Failed to load reservation");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [bookingId]);

  const selectedCar = useMemo(() => cars.find((c) => c.id === carId), [cars, carId]);

  const resolvedPricingId = useMemo(() => {
    if (!selectedCar?.pricing?.length) return "";
    if (
      explicitPricingId &&
      selectedCar.pricing.some((p) => p.id === explicitPricingId)
    ) {
      return explicitPricingId;
    }
    const match = selectedCar.pricing.find((p) => p.duration === durationEnum);
    return (match || selectedCar.pricing[0]).id;
  }, [selectedCar, durationEnum, explicitPricingId]);

  const pickupDateTime = useMemo(() => {
    if (!pickupDate) return null;
    const t = pickupTime || pickupDate;
    return pickupDate.hour(t.hour()).minute(t.minute()).second(0);
  }, [pickupDate, pickupTime]);

  const returnDateTime = useMemo(() => {
    if (!returnDate) return null;
    const t = returnTime || returnDate;
    return returnDate.hour(t.hour()).minute(t.minute()).second(0);
  }, [returnDate, returnTime]);

  const computedTotalPrice = useMemo(() => {
    if (!selectedCar?.pricing?.length || !resolvedPricingId || !pickupDateTime || !returnDateTime) {
      return 0;
    }
    const pr = selectedCar.pricing.find((p) => p.id === resolvedPricingId);
    if (!pr) return 0;
    const ms = returnDateTime.diff(pickupDateTime, "minute");
    const days = Math.max(1, Math.ceil(ms / (60 * 24)));
    const weeks = Math.max(1, Math.ceil(days / 7));
    const months = Math.max(1, Math.ceil(days / 30));
    switch (pr.duration) {
      case "HOUR":
        return pr.price * Math.max(1, Math.ceil(ms / 60));
      case "DAY":
        return pr.price * days;
      case "WEEK":
        return pr.price * weeks;
      case "MONTH":
        return pr.price * months;
      default:
        return pr.price;
    }
  }, [selectedCar, resolvedPricingId, pickupDateTime, returnDateTime]);

  const selectedUser = useMemo(() => users.find((u) => u.id === userId), [users, userId]);

  const customerOptions = useMemo(
    () =>
      users.map((u) => ({
        label:
          [u.firstName, u.lastName].filter(Boolean).join(" ").trim() ||
          u.phoneNum ||
          u.id,
        value: u.id,
      })),
    [users]
  );

  const pickCar = useCallback((id: string) => {
    setCarId(id);
    setExplicitPricingId(null);
  }, []);

  const buildPayload = (): Omit<AdminReservationPayload, "status"> | null => {
    if (!carId || !resolvedPricingId || !userId || !pickupDateTime || !returnDateTime) {
      return null;
    }
    const addrOut = sameReturn ? deliveryAddress : returnAddress;
    return {
      carId,
      pricingId: resolvedPricingId,
      userId,
      duration: durationEnum,
      totalPrice: computedTotalPrice,
      bookingType: rentalValueToBookingType(rentalTypeValue),
      deliveryAddress: deliveryAddress || undefined,
      returnAddress: addrOut || undefined,
      sameReturn,
      pickupDate: pickupDateTime.toISOString(),
      returnDate: returnDateTime.toISOString(),
      color: selectedCar?.color,
      hexCode: selectedCar?.hexCode,
    };
  };

  const submitCreate = async (): Promise<string | null> => {
    setSubmitError(null);
    const payload = buildPayload();
    if (!payload) {
      setSubmitError("Please complete car, customer, and dates.");
      return null;
    }
    setSaving(true);
    try {
      const created = await createReservation({ ...payload, status: "PENDING" });
      setCreatedBookingId(created.id);
      return created.id;
    } catch (e: unknown) {
      const msg =
        e && typeof e === "object" && "message" in e
          ? String((e as { message: string }).message)
          : "Save failed";
      setSubmitError(msg);
      return null;
    } finally {
      setSaving(false);
    }
  };

  const submitUpdate = async (): Promise<boolean> => {
    if (!bookingId) return false;
    setSubmitError(null);
    const payload = buildPayload();
    if (!payload) {
      setSubmitError("Please complete car, customer, and dates.");
      return false;
    }
    setSaving(true);
    try {
      await updateReservation(bookingId, { ...payload, status: reservationStatus });
      return true;
    } catch (e: unknown) {
      const msg =
        e && typeof e === "object" && "message" in e
          ? String((e as { message: string }).message)
          : "Update failed";
      setSubmitError(msg);
      return false;
    } finally {
      setSaving(false);
    }
  };

  return {
    cars,
    loadError,
    submitError,
    saving,
    createdBookingId,
    tariffValue,
    setTariffValue,
    rentalTypeValue,
    setRentalTypeValue,
    pickupDate,
    setPickupDate,
    pickupTime,
    setPickupTime,
    returnDate,
    setReturnDate,
    returnTime,
    setReturnTime,
    deliveryAddress,
    setDeliveryAddress,
    returnAddress,
    setReturnAddress,
    sameReturn,
    setSameReturn,
    carId,
    setCarId,
    setExplicitPricingId,
    userId,
    setUserId,
    selectedCar,
    selectedUser,
    customerOptions,
    resolvedPricingId,
    computedTotalPrice,
    pickupDateTime,
    returnDateTime,
    durationEnum,
    imageBaseUrl,
    reservationStatus,
    setReservationStatus,
    submitCreate,
    submitUpdate,
    pickCar,
  };
}
