import Button from "../Button/Button";

export default function OrderDetailsCard({
  orderId,
  status,
  totalPrice,
  subtotal,
  tax,
  orderItems,
  shippingAddress,
  billingAddress,
  setOrderDetails,
}) {
  const handleBack = (e) => {
    e.preventDefault();
    setOrderDetails({});
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
          Total: {totalPrice}€
        </p>
        <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Subtotal: {subtotal}€
        </p>
        <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Tax: {tax}€
        </p>
        {/* Shipping address */}
        {/* billing address */}
        {/* Order items */}
        <Button
          handleClick={handleBack}
          classNameValue="w-full text-white flex justify-center hover:cursor-pointer bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm mb-2 dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-700 dark:border-red-700 mt-4"
        >
          Back
        </Button>
      </div>
    </div>
  );
}
