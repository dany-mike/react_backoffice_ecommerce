import API, { TOKEN_KEY, USER_KEY } from "./APIUtils";
import { authHeader, setLocalStorage } from "../utils";
import { setToken } from "./APIUtils";

function handleLoginResponse(response) {
  setLocalStorage(TOKEN_KEY, response.data.accessToken);
  setLocalStorage(USER_KEY, response.data);
  setToken(response.data.accessToken);
  return response.data;
}

export function login(email, password) {
  return API.post("/auth/signin", {
    username: email,
    password,
  })
    .then((res) => handleLoginResponse(res))
    .catch((err) => err);
}

export function getCurrentUser() {
  return API.get(`/users/me`)
    .then((res) => res)
    .catch((err) => err);
}

export function createAdmin(email, password, firstname, lastname, role) {
  return API.post("/auth/createAdmin", {
    email,
    password,
    firstname,
    lastname,
    role,
  })
    .then((res) => res)
    .catch((err) => err);
}

export async function getAdminUsers() {
  return API.get("/auth/admin-users", { headers: authHeader() })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  setToken(null);
}
