import axios from "axios";
import { Cookies } from "react-cookie";
import { getCookieToken, getRefreshToken } from "./cookie";

const baseURL = process.env.REACT_APP_API_URL;

const myToken = getCookieToken();

const cookie = new Cookies();

export const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

const instance = axios.create({
  baseURL,
  headers: {
    AcceptToken: myToken,
    "Cache-Control": "no-cache",
    "refresh-token": getRefreshToken(),
  },
});

export default instance;

//토큰 만료시 인터셉터

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      try {
        const { data } = await instance.get(`/validate`);
        if (data.data.validate === 1) {
          // window.location.href = '/login'
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
);

export const anyApis = {
  //좋아요기능
  liked: (data, info) => instance.post(`/post/like/${data}`, info),
};
