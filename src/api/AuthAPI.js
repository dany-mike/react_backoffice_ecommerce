import API, { TOKEN_KEY } from "./APIUtils";
import { setLocalStorage } from "../utils";
import { setToken } from "./APIUtils";

function handleLoginResponse(response) {
  setLocalStorage(TOKEN_KEY, response.data.accessToken);
  setToken(response.data.accessToken);
  return response.data;
}

export async function login(email, password) {
  return API.post("/auth/signin", {
    email,
    password,
  }).then((res) => handleLoginResponse(res));
}

export function register(email, password, firstname, lastname, role) {
  return API.post("/auth/createAdmin", {
    email,
    password,
    firstname,
    lastname,
    role,
  }).then((res) => res);
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  setToken(null);
}
