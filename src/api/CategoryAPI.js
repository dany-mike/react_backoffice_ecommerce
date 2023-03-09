import API from "./APIUtils";

export function fetchCategories() {
  return API.get("/category")
    .then((res) => res.data)
    .catch((err) => err);
}
