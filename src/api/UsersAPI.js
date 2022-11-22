import { authHeader } from "../utils";
import API from "./APIUtils";

export function fetchCurrentUser() {
  // Warning
  return API.get(`/users/token/me`)
    .then((res) => res)
    .catch((err) => err);
}

export function fetchUsers() {
  return API.get(`/users`)
    .then((res) => res.data)
    .catch((err) => err);
}

export function fetchUserById(id) {
  return API.get(`/users/${id}`, { headers: authHeader() })
    .then((res) => res.data)
    .catch((err) => err);
}
