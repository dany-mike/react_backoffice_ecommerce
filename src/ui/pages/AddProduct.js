import { useState } from "react";
import { useEffect } from "react";
import { fetchCategories } from "../../api/CategoryAPI";
import { formatToMultiselectArray } from "../../utils";
import ProductForm from "../components/ProductForm/ProductForm";

export default function AddProduct() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async () => {
      setCategories(formatToMultiselectArray(await fetchCategories()));
    })();
  }, []);

  return (
    <div className="edit-product">
      <p className="text-xl font-semibold">Add product</p>
      <ProductForm categories={categories} />
    </div>
  );
}
