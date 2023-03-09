import { authHeader } from "../utils";
import API from "./APIUtils";

export function fetchCategories() {
  return API.get("/category")
    .then((res) => res.data)
    .catch((err) => err);
}

export function fetchCategory(id) {
  return API.get(`/category/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
}

export function deleteCategory(id) {
  return API.delete(`/category/${id}`)
    .then((res) => res.data)
    .catch((err) => err);
}

export function createCategory(name, productIds) {
  return API.post(
    "/category",
    { productIds, name },
    {
      headers: authHeader(),
      "Content-Type": "application/json",
    }
  )
    .then((res) => res)
    .catch((err) => err);
}

export async function updateCategory(id, name, productIds) {
  return API.put(
    `/category/${id}`,
    {
      name,
      productIds,
    },
    {
      headers: authHeader(),
      "Content-Type": "application/json",
    }
  )
    .then((res) => res.data)
    .catch((err) => err);
}
