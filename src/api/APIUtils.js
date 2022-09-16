import { navigate } from "@reach/router";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const TOKEN_KEY = "token";
export const USER_KEY = "user";

axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    switch (error.response.status) {
      case 401:
        navigate("/register");
        break;
      case 404:
      case 403:
        navigate("/");
        break;
      default:
        console.log("default");
    }
    return Promise.reject(error.response);
  }
);

export function setToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}
export function isTokenValid(token) {
  try {
    const decoded_jwt = jwtDecode(token);
    const current_time = Date.now().valueOf() / 1000;
    return decoded_jwt.exp > current_time;
  } catch (error) {
    return false;
  }
}

export default axios;
