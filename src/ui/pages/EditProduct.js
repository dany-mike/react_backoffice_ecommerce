import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCategories } from "../../api/CategoryAPI";
import { fetchProduct } from "../../api/ProductsAPI";
import useAuth from "../../context/auth";
import { formatToMultiselectArray } from "../../utils";
import ProductForm from "../components/ProductForm/ProductForm";

export default function EditProduct() {
  const [product, setProduct] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [categories, setCategories] = useState([]);
  const params = useParams();

  const {
    state: { user },
  } = useAuth();

  useEffect(() => {
    (async () => {
      const product = await fetchProduct(params?.id);
      setCategories(formatToMultiselectArray(await fetchCategories()));
      setProduct(product);
      setProductCategories(formatToMultiselectArray(product?.category));
    })();
  }, [params?.id, user]);

  return (
    <div className="edit-product">
      <p className="text-xl font-semibold">Edit {product?.name}</p>
      {product ? (
        <ProductForm
          productInfo={product}
          isEdit={true}
          productCategories={productCategories}
          categories={categories}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
