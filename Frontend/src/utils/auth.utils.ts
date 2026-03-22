import Cookies from "js-cookie";

export const getAccessToken = (key: string): string | undefined => {
  return Cookies.get(key);
};

/** Matches `Cookies.set` in `authentication/login.tsx` so removal works on HTTPS. */
const CUSTOMER_COOKIE_OPTS = {
  path: "/",
  secure: true,
  sameSite: "strict" as const,
};

export function clearCustomerAuthCookies(): void {
  Cookies.remove("accessToken", { path: "/" });
  Cookies.remove("refreshToken", { path: "/" });
  Cookies.remove("accessToken", CUSTOMER_COOKIE_OPTS);
  Cookies.remove("refreshToken", CUSTOMER_COOKIE_OPTS);
}

export function clearAdminAuthCookies(): void {
  Cookies.remove("adminAccessToken", { path: "/" });
  Cookies.remove("adminRefreshToken", { path: "/" });
}

export function clearCarPartnerAuthCookies(): void {
  Cookies.remove("carPartnerAccessToken", { path: "/" });
}