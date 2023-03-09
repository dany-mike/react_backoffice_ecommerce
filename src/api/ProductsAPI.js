import { authHeader } from "../utils";
import API from "./APIUtils";

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

export function createProduct(
  name,
  price,
  quantity,
  description,
  imageFiles,
  categoryIds
) {
  const bodyFormData = new FormData();
  bodyFormData.append("name", name);
  bodyFormData.append("price", price);
  bodyFormData.append("quantity", quantity);
  bodyFormData.append("description", description);
  bodyFormData.append("categoryIds", categoryIds ? categoryIds : []);
  const file = imageFiles[0];
  if (file) {
    bodyFormData.append("file", file, file?.name);
  }

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
  imageFiles,
  categoryIds
) {
  const bodyFormData = new FormData();
  bodyFormData.append("name", name);
  bodyFormData.append("price", price);
  bodyFormData.append("quantity", quantity);
  bodyFormData.append("description", description);

  if (categoryIds?.length > 0) {
    for (const id of categoryIds) {
      bodyFormData.append("categoryIds", id);
    }
  }

  const file = imageFiles[0];
  if (file) {
    bodyFormData.append("file", file, file?.name);
  }

  return API.put(`/products/${id}`, bodyFormData, {
    headers: authHeader(),
    "Content-Type": "multipart/form-data",
  })
    .then((res) => res.data)
    .catch((err) => console.log(err));
}
