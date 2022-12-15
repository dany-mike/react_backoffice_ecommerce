export default function CartItemCard({ name, price, quantity, image }) {
  return (
    <div className="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full mt-4 mr-4">
      <img
        className="object-cover w-full h-64 rounded"
        src={image?.url ? image?.url : image}
        alt={image?.key}
      />
      <div className="p-5">
        <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {name}
        </h5>
        <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          {price}€
        </h5>
        <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Quantity: {quantity}
        </h5>
      </div>
    </div>
  );
}
