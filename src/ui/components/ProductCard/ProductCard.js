import { Link } from "react-router-dom";
import { formatDate } from "../../../utils";
import Button from "../Button/Button";

export default function ProductCard({
  name,
  description,
  price,
  id,
  quantity,
  handleDelete,
  image,
  createdDate,
}) {
  return (
    <div className="max-w-lg bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 w-full mt-4 mr-4">
      <Link to={`/products/edit/${id}`}>
        <img
          className="object-cover w-full h-64 rounded"
          src={image?.url}
          alt={image?.key}
        />
      </Link>
      <div className="p-5">
        <Link to={`/products/edit/${id}`}>
          <h5 className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Price: {price}€
          </h5>
          <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Quantity: *{quantity}
          </h5>
          <h5 className="mb-1 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Created date: {formatDate(createdDate)}
          </h5>
        </Link>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Link to={`/products/edit/${id}`}>
          <Button classNameValue="inline-flex items-center text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2 hover:cursor-pointer">
            Edit
          </Button>
        </Link>
        <Button
          handleClick={handleDelete}
          parameter={id}
          classNameValue="inline-flex items-center text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 hover:cursor-pointer"
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
