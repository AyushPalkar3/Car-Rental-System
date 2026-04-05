/**
 * Central helpers for API and static upload URLs from Vite env.
 * Set VITE_API_BASE_URL and VITE_API_BASE_URL_IMAGE in .env (see .env.development).
 */

/** JSON API base, e.g. https://api.ekalodrive.com/api — no trailing slash. */
export function getApiBaseUrl(): string {
  const api = import.meta.env.VITE_API_BASE_URL;
  if (typeof api === "string" && api.trim()) {
    return api.replace(/\/$/, "");
  }
  return "http://localhost:4000/api";
}

/**
 * Origin for uploaded files and car images (/uploads/...).
 * Prefers VITE_API_BASE_URL_IMAGE; otherwise strips /api from VITE_API_BASE_URL.
 */
export function getMediaBaseUrl(): string {
  const imageEnv = import.meta.env.VITE_API_BASE_URL_IMAGE;
  if (typeof imageEnv === "string" && imageEnv.trim()) {
    return imageEnv.replace(/\/$/, "");
  }
  const api = import.meta.env.VITE_API_BASE_URL || "";
  if (api.trim()) {
    const origin = api.replace(/\/api\/?$/i, "").replace(/\/$/, "");
    if (origin) return origin;
  }
  return "http://localhost:4000";
}
