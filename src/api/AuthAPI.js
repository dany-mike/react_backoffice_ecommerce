import API, { TOKEN_KEY } from "./APIUtils";
import { setLocalStorage } from "../utils";
import { setToken } from "./APIUtils";

function handleUserResponse({ user: { token, ...user } }) {
  setLocalStorage(TOKEN_KEY, token);
  setToken(token);
  return user;
}

export function login(email, password) {
  return API.post("/users/login").then((user) => handleUserResponse(user.data));
}

export function register() {
  return API.post("/users").then((user) => handleUserResponse(user.data));
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  setToken(null);
}
