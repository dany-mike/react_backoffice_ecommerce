import { formatDate } from "../../../utils";
import Button from "../Button/Button";

export default function OrderItemCard({
  orderId,
  status,
  totalPrice,
  subtotal,
  tax,
  orderItems,
  shippingAddress,
  billingAddress,
  setOrderDetails,
  createdDate,
}) {
  const setOrderDetailsState = (e, order) => {
    e.preventDefault();
    setOrderDetails(order);
  };
  return (
    <div className="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full mt-4 mr-4">
      <div className="p-5">
        <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Order number: {orderId}
        </p>
        <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Status: {status}
        </p>
        <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Order total: {totalPrice}€
        </p>
        <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Order date: {formatDate(createdDate)}
        </p>
        <Button
          handleClick={setOrderDetailsState}
          parameter={{
            orderId,
            status,
            totalPrice,
            subtotal,
            tax,
            orderItems,
            shippingAddress,
            billingAddress,
            createdDate,
          }}
          classNameValue="text-white flex justify-center hover:cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-4"
        >
          Order details
        </Button>
      </div>
    </div>
  );
}
