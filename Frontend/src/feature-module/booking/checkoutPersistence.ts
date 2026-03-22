import dayjs, { type Dayjs } from "dayjs";

const STORAGE_KEY = "ekal_checkout_v1";

function isDayjsLike(v: unknown): v is Dayjs {
  return (
    !!v &&
    typeof v === "object" &&
    typeof (v as Dayjs).hour === "function" &&
    typeof (v as Dayjs).minute === "function"
  );
}

/** JSON-safe snapshot of checkout slice (session tab only). */
export function serializeCheckoutState(state: Record<string, unknown>): string {
  const o: Record<string, unknown> = { ...state };

  if (o.startDate instanceof Date) {
    o.startDate = o.startDate.toISOString();
  }
  if (o.endDate instanceof Date) {
    o.endDate = o.endDate.toISOString();
  }

  if (isDayjsLike(o.startTime)) {
    o.startTime = {
      __hm: true,
      h: o.startTime.hour(),
      m: o.startTime.minute(),
    };
  }
  if (isDayjsLike(o.endTime)) {
    o.endTime = {
      __hm: true,
      h: o.endTime.hour(),
      m: o.endTime.minute(),
    };
  }

  return JSON.stringify(o);
}

export function deserializeCheckoutState(
  raw: string
): Record<string, unknown> | null {
  try {
    const o = JSON.parse(raw) as Record<string, unknown>;
    if (!o || typeof o !== "object") return null;

    if (typeof o.startDate === "string") {
      const d = new Date(o.startDate);
      o.startDate = Number.isNaN(d.getTime()) ? null : d;
    }
    if (typeof o.endDate === "string") {
      const d = new Date(o.endDate);
      o.endDate = Number.isNaN(d.getTime()) ? null : d;
    }

    const st = o.startTime as { __hm?: boolean; h?: number; m?: number } | null;
    if (st && st.__hm && typeof st.h === "number" && typeof st.m === "number") {
      o.startTime = dayjs().hour(st.h).minute(st.m).second(0).millisecond(0);
    }

    const et = o.endTime as { __hm?: boolean; h?: number; m?: number } | null;
    if (et && et.__hm && typeof et.h === "number" && typeof et.m === "number") {
      o.endTime = dayjs().hour(et.h).minute(et.m).second(0).millisecond(0);
    }

    return o;
  } catch {
    return null;
  }
}

export function loadPersistedCheckout(): Record<string, unknown> | null {
  if (typeof sessionStorage === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return deserializeCheckoutState(raw);
  } catch {
    return null;
  }
}

export function savePersistedCheckout(state: Record<string, unknown>): void {
  if (typeof sessionStorage === "undefined") return;
  try {
    if (!state?.car) {
      sessionStorage.removeItem(STORAGE_KEY);
      return;
    }
    sessionStorage.setItem(STORAGE_KEY, serializeCheckoutState(state));
  } catch {
    /* quota / private mode */
  }
}

export function clearPersistedCheckout(): void {
  if (typeof sessionStorage === "undefined") return;
  try {
    sessionStorage.removeItem(STORAGE_KEY);
  } catch {
    /* ignore */
  }
}
