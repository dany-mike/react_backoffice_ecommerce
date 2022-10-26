import API, { TOKEN_KEY, USER_KEY } from "./APIUtils";
import { authHeader } from "../utils";
import { setToken } from "./APIUtils";

export function fetchProducts() {
  return API.get("/products")
    .then((res) => res.data)
    .catch((err) => err);
}

export function createProduct(name, price, quantity, description, image) {
  return API.post(
    "/products",
    {
      name,
      price,
      quantity,
      description,
      image,
    },
    { headers: authHeader() }
  )
    .then((res) => res)
    .catch((err) => err);
}

export async function updateProduct(
  id,
  name,
  price,
  quantity,
  description,
  image
) {
  return API.put(
    `/products/${id}`,
    {
      name,
      price,
      quantity,
      description,
      image,
    },
    { headers: authHeader() }
  )
    .then((res) => res.data)
    .catch((err) => console.log(err));
}

export function logout() {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USER_KEY);
  setToken(null);
}
