import API from "./APIUtils";

export function cancelOrder() {
  return API.get("/order/cancel")
    .then((res) => res.data)
    .catch((err) => err);
}

export const CREATED = "CREATED";
export const COMPLETE = "COMPLETE";
