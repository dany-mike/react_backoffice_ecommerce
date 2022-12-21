import API from "./APIUtils";

export function cancelOrder(orderId, userId) {
  return API.post(`/order/cancel/${userId}`, { orderId })
    .then((res) => res.data)
    .catch((err) => err);
}

export const CREATED = "CREATED";
export const COMPLETE = "COMPLETE";
export const CANCELLED = "CANCELLED";
