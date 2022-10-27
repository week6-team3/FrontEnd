import axios from "axios";
import { Cookies } from "react-cookie";
import { getCookieToken, getRefreshToken } from "./cookie";


// const myToken = getCookieToken()

const myToken = localStorage.getItem("AccessToken")

const cookie = new Cookies()

const Api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        authorization: `Bearer ${myToken}`,
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
        Accept: "*/*",
        "refresh-token": getRefreshToken(),
    }

    //토큰 만료시 인터셉터
    // instance.interceptors.response.use(
    //     (response) => {
    //       return response;
    //     },
    //     async (error) => {
    //       if (error.response.status === 401) {
    //         try {
    //           const { data } = await instance.get(`/validate`);
    //           if (data.data.validate === 1) {
    //             // window.location.href = '/login'
    //           }
    //         } catch (error) {
    //           console.log(error);
    //         }
    //       }
    //     }
    //   );


});
Api.defaults.withCredentials = true;
export default Api

