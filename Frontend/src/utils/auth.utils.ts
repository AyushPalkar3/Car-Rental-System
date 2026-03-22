import Cookies from "js-cookie";

export const getAccessToken = (key: string): string | undefined => {
  return Cookies.get(key);
};