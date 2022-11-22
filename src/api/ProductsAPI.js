import API, { TOKEN_KEY, USER_KEY } from "./APIUtils";
import { authHeader } from "../utils";
import { setToken } from "./APIUtils";

export function fetchProducts() {
  return API.get("/products")
    .then((res) => res.data)
    .catch((err) => err);
}

export function fetchProduct(id) {
  return API.get(`/products/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
}

export function deleteProduct(id) {
  return API.delete(`/products/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
}

export function createProduct(name, price, quantity, description, imageFiles) {
  const bodyFormData = new FormData();
  bodyFormData.append("name", name);
  bodyFormData.append("price", price);
  bodyFormData.append("quantity", quantity);
  bodyFormData.append("description", description);
  const file = imageFiles[0];
  bodyFormData.append("file", file, file.name);

  return API.post("/products", bodyFormData, {
    headers: authHeader(),
    "Content-Type": "multipart/form-data",
  })
    .then((res) => res)
    .catch((err) => err);
}

export async function updateProduct(
  id,
  name,
  price,
  quantity,
  description,
  imageFiles
) {
  const bodyFormData = new FormData();
  bodyFormData.append("name", name);
  bodyFormData.append("price", price);
  bodyFormData.append("quantity", quantity);
  bodyFormData.append("description", description);
  const file = imageFiles[0];
  bodyFormData.append("file", file, file.name);

  return API.put(`/products/${id}`, bodyFormData, {
    headers: authHeader(),
    "Content-Type": "multipart/form-data",
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  setToken(null);
}
