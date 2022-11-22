
export default function CartItemCard({
  name,
  description,
  price,
  quantity,
  image,
}) {
  return (
    <div className="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full mt-4 mr-4">
      <img
        className="object-cover w-full h-64 rounded"
        src={image?.url}
        alt={image?.key}
      />
      <div className="p-5">
        <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Selected product: {name}
        </h5>
        <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Item price: {price}€
        </h5>
        <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
          Selected quantity: {quantity}
        </h5>
      </div>
    </div>
  );
}
