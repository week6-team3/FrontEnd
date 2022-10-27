import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setAccessToken = (AccessToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 3);
  // const expireDate = new Date(new Date().getTime() + 60 * 1000* 60 *24);
  return cookies.set("AccessToken", AccessToken, {
    samSite: "None",
    path: "/",
    expires: new Date(expireDate),
  });
};

export const setRefreshToken = (RefreshToken) => {
  const today = new Date();
  // const expireDate = new Date(new Date().getTime() + 60 * 1000* 60* 24);
  const expireDate = today.setDate(today.getDate() + 3);
  return cookies.set("RefreshToken", RefreshToken, {
    sameSite: "None",
    path: "/",
    expires: new Date(expireDate),
  });
};

export const getCookieToken = () => {
  return cookies?.get("AccessToken");
};

export const getRefreshToken = () => {
  return cookies?.get("RefreshToken");
};

export const removeCookieToken = () => {
  return cookies?.remove("AccessToken", { sameSite: "strict", path: "/" });
};

export const removeRefreshCookieToken = () => {
  return cookies?.remove("RefreshToken", { sameSite: "strict", path: "/" });
};
