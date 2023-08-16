import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { fetchProducts } from "../../api/ProductsAPI";
import { formatToMultiselectArray } from "../../utils";
import CategoryForm from "../components/CategoryForm/CategoryForm";

export default function AddCategory() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      setProducts(formatToMultiselectArray(await fetchProducts()));
    })();
  }, []);
  return (
    <div className="edit-category">
      <p className="text-xl font-semibold">Add category</p>
      <CategoryForm products={products} />
    </div>
  );
}
