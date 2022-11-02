import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api/ProductsAPI";
import useAuth from "../../context/auth";
import ProductForm from "../components/ProductForm/ProductForm";

export default function Product() {
  const [product, setProduct] = useState([]);
  const params = useParams();

  const {
    state: { user },
  } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await fetchProduct(params?.id);
      setProduct(response);
    })();
  }, [user, params]);

  return (
    <div className="edit-product">
      <p className="text-xl font-semibold">Edit {product?.name}</p>
      <ProductForm />
    </div>
  );
}
