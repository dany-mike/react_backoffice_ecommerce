import { Link } from "@reach/router";
import Button from "../Button/Button";

export default function ProductCard({ name, description, price, quantity }) {
  return (
    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <Link to="/">
        <img
          className="rounded-t-lg"
          src="/docs/images/blog/image-1.jpg"
          alt=""
        />
      </Link>
      <div className="p-5">
        <Link to="/">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {name}
          </h5>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Price: {price}€
          </h5>
          <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
            Quantity: *{quantity}
          </h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
        <Button classNameValue="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2 hover:cursor-pointer">
          Edit
        </Button>
        <Button classNameValue="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-red-700 rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 hover:cursor-pointer">
          Delete
        </Button>
      </div>
    </div>
  );
}
