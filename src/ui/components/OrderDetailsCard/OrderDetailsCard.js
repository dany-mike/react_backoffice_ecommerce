import { COMPLETE, CREATED } from "../../../api/OrderAPI";
import { formatDate } from "../../../utils";
import Button from "../Button/Button";
import ItemCard from "../ItemCard/ItemCard";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

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
  createdDate,
  onCancelOrder,
  loading,
  userId,
  updatedDate,
}) {
  const handleBack = (e) => {
    e.preventDefault();
    setOrderDetails({});
  };

  function Addresses() {
    if (billingAddress && shippingAddress) {
      return (
        <>
          <div className="mt-8 mb-1 text-lg tracking-tight text-gray-900 dark:text-white shadow-md rounded-lg border border-gray-200">
            <p className="p-4">
              <span className="text-xl font-bold">Shipping address: </span>
              {shippingAddress?.countryCode} {shippingAddress?.city}{" "}
              {shippingAddress?.streetNumber} {shippingAddress?.streetName}{" "}
              {shippingAddress?.postalCode}
            </p>
          </div>
          <div className="mb-1 text-lg tracking-tight text-gray-900 dark:text-white shadow-md rounded-lg border border-gray-200">
            <p className="p-4">
              <span className="text-xl font-bold">Billing address: </span>
              {billingAddress?.countryCode} {billingAddress?.city}{" "}
              {billingAddress?.streetNumber} {billingAddress?.streetName}{" "}
              {billingAddress?.postalCode}
            </p>
          </div>
        </>
      );
    }
  }
  return loading ? (
    <LoadingSpinner />
  ) : (
    <>
      <div className="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full mt-4 mr-4">
        <div className="p-5">
          <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Order number: {orderId}
          </p>
          <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Order date: {formatDate(createdDate)}
          </p>
          {/* <p className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Last update date: {formatDate(updatedDate)}
          </p> */}
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
          <Addresses />
          <p className="mt-8 text-xl font-semibold">
            N° of items {orderItems?.length}
          </p>
          <div className="flex flex-wrap">
            {orderItems?.length > 0 ? (
              orderItems.map((order) => (
                <ItemCard
                  name={order.name}
                  price={order.price}
                  quantity={order.quantity}
                  key={order.id}
                  image={order.image}
                />
              ))
            ) : (
              <p>There is no items in order n° {orderId}</p>
            )}
          </div>
          {status === CREATED || status === COMPLETE ? (
            <>
              {" "}
              <Button
                handleClick={(event) =>
                  onCancelOrder(event, orderId, userId, {
                    shippingAddress,
                    billingAddress,
                    createdDate,
                    orderId,
                    orderItems,
                    tax,
                    totalPrice,
                    subtotal,
                  })
                }
                classNameValue="w-full text-white flex justify-center hover:cursor-pointer bg-indigo-800 hover:bg-indio-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm mb-2 dark:bg-indigo-800 dark:hover:bg-indigo-700 dark:focus:ring-indigo-700 dark:border-indigo-700 mt-4"
              >
                Cancel order
              </Button>
            </>
          ) : (
            <></>
          )}
          <Button
            handleClick={handleBack}
            classNameValue="w-full text-white flex justify-center hover:cursor-pointer bg-red-800 hover:bg-red-900 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm mb-2 dark:bg-red-800 dark:hover:bg-red-700 dark:focus:ring-red-700 dark:border-red-700 mt-4"
          >
            Back
          </Button>
        </div>
      </div>
    </>
  );
}
