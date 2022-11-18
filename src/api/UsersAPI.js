import API from "./APIUtils";

export function fetchCurrentUser() {
  return API.get(`/users/me`)
    .then((res) => res)
    .catch((err) => err);
}

export function fetchUsers() {
  return API.get(`/users`)
    .then((res) => res.data)
    .catch((err) => err);
}
