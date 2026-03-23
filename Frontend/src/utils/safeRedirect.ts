/**
 * Returns a safe in-app path for post-login redirects (blocks open redirects).
 */
export function getSafeInternalPath(redirect: string | null | undefined): string | null {
  if (redirect == null || typeof redirect !== "string") return null;
  let s = redirect.trim();
  try {
    s = decodeURIComponent(s);
  } catch {
    return null;
  }
  s = s.trim();
  if (!s.startsWith("/") || s.startsWith("//")) return null;
  if (/\s/.test(s)) return null;
  return s;
}

export function getSafeRedirectFromSearch(search: string): string | null {
  const params = new URLSearchParams(
    search.startsWith("?") ? search.slice(1) : search
  );
  return getSafeInternalPath(params.get("redirect"));
}
