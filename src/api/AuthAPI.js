import API, { TOKEN_KEY } from "./APIUtils";
// import { setLocalStorage } from "../utils";
import { setToken } from "./APIUtils";

function handleUserResponse(response) {
  console.log(response);
  // setLocalStorage(TOKEN_KEY, token);
  // setToken(token);
  // return user;
}

export async function login(email, password) {
  return API.post("/auth/signin", {
    email,
    password,
  }).then((res) => handleUserResponse(res));
}

export function register(email, password, firstname, lastname) {
  return API.post("/auth/createAdmin", {
    email,
    password,
    firstname,
    lastname,
    role: "admin",
  }).then((res) => handleUserResponse(res));
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  setToken(null);
}
