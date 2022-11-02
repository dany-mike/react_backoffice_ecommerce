import { useState } from "react";
import { useEffect } from "react";
import { fetchProducts } from "../../api/ProductsAPI";
import useAuth from "../../context/auth";
import Button from "../components/Button/Button";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const {
    state: { user },
  } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await fetchProducts();
      setProducts(response);
    })();
  }, [user]);

  return (
    <div>
      <h1 className="text-xl">My products</h1>
      <div className="flex flex-wrap">
        {products &&
          products.map((product) => (
            <ProductCard
              className=""
              description={product.description}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              key={product.id}
            />
          ))}
      </div>

      <Button classNameValue="mt-4 inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2 hover:cursor-pointer">
        Add product
      </Button>
    </div>
  );
}
