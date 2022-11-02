import { useState } from "react";
import { useEffect } from "react";
import { fetchProducts } from "../../api/ProductsAPI";
import useAuth from "../../context/auth";
import Button from "../components/Button/Button";
import ProductCard from "../components/ProductCard/ProductCard";

export default function Product() {
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

  return <div>Product details</div>;
}
