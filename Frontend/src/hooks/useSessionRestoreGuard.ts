import { useEffect } from "react";
import Cookies from "js-cookie";

/**
 * After logout, some browsers restore the SPA from the back-forward cache. Cookies are
 * already cleared but in-memory UI can still show. Re-verify the session cookie on restore.
 */
export function useSessionRestoreGuard(cookieName: string, loginPath: string) {
  useEffect(() => {
    const ensureSession = () => {
      if (!Cookies.get(cookieName)) {
        window.location.replace(loginPath);
      }
    };
    const onPageShow = (e: PageTransitionEvent) => {
      if (e.persisted) ensureSession();
    };
    window.addEventListener("pageshow", onPageShow);
    return () => window.removeEventListener("pageshow", onPageShow);
  }, [cookieName, loginPath]);
}
