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

export function createAdmin(email, password, firstname, lastname, role) {
  return API.post(
    "/auth/createAdmin",
    {
      email,
      password,
      firstname,
      lastname,
      role,
    },
    { headers: authHeader() }
  )
    .then((res) => res)
    .catch((err) => err);
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  setToken(null);
}
