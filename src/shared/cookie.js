import { Cookies } from "react-cookie";

const cookies = new Cookies();

export const setAccessToken = (AccessToken) => {
  const today = new Date();
  const expireDate = today.setDate(today.getDate() + 3);
  // const expireDate = new Date(new Date().getTime() + 60 * 1000* 60 *24);
  console.log("9번째", AccessToken);
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
  console.log("9번째", RefreshToken);
  return cookies.set("RefreshToken", RefreshToken, {
    sameSite: "None",
    path: "/",
    expires: new Date(expireDate),
  });
};

export const getCookieToken = () => {
  console.log("28번째", cookies);
  return cookies.get("AccessToken");
};

export const getRefreshToken = () => {
  return cookies.get("RefreshToken");
};

export const removeCookieToken = () => {
  return cookies.remove("AccessToken", { sameSite: "strict", path: "/" });
};

export const removeRefreshCookieToken = () => {
  return cookies.remove("RefreshToken", { sameSite: "strict", path: "/" });
};
