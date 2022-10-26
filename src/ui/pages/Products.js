import { useState } from "react";
import { useEffect } from "react";
import { fetchProducts } from "../../api/ProductsAPI";
import useAuth from "../../context/auth";
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
      <h1 className="text-xl mb-8">Products!</h1>
      {products &&
        products.map((product) => (
          <ProductCard
            description={product.description}
            name={product.name}
            price={product.price}
            quantity={product.quantity}
            key={product.id}
          />
        ))}
    </div>
  );
}
