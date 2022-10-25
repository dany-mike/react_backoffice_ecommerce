import API, { TOKEN_KEY, USER_KEY } from "./APIUtils";
import { authHeader } from "../utils";
import { setToken } from "./APIUtils";

export function fetchProducts() {
  return API.get("/products")
    .then((res) => res)
    .catch((err) => err);
}

export function createProduct(email, password, firstname, lastname, role) {
  return API.post("/products", { headers: authHeader() })
    .then((res) => res)
    .catch((err) => err);
}

export async function updateProduct(id) {
  return API.put(`/products/${id}`, { headers: authHeader() })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  setToken(null);
}
