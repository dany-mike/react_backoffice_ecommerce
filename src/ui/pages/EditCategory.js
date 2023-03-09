import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategory } from "../../api/CategoryAPI";
import { fetchProducts } from "../../api/ProductsAPI";
import useAuth from "../../context/auth";
import { formatToMultiselectArray } from "../../utils";
import CategoryForm from "../components/CategoryForm/CategoryForm";

export default function EditCategory() {
  const [category, setCategory] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const params = useParams();

  const {
    state: { user },
  } = useAuth();

  useEffect(() => {
    (async () => {
      const category = await fetchCategory(params?.name);
      setProducts(formatToMultiselectArray(await fetchProducts()));
      setCategory(category);
      setCategoryProducts(formatToMultiselectArray(category?.products));
    })();
  }, [params?.name, user]);

  return (
    <div className="edit-product">
      <p className="text-xl font-semibold">Edit {category?.name}</p>
      {category ? (
        <CategoryForm
          categoryInfo={category}
          isEdit={true}
          categoryProducts={categoryProducts}
          products={products}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
