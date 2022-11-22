import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../api/UsersAPI";
import { useLoading } from "../../context/loading";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import ProductCard from "../components/ProductCard/ProductCard";

export default function UserCart() {
  const params = useParams();
  const [user, setUser] = useState([]);

  const { loading, setLoading } = useLoading();

  useEffect(() => {
    (async () => {
      setLoading(true);
      setUser(await fetchUserById(params?.userId));
      setLoading(false);
    })();
  }, [params?.userId, setLoading]);
  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          {user.firstname} {user.lastname} Cart
          {/* {user.cart.products.length > 0 &&
          user.cart.products?.map((product) => (
            <ProductCard
              description={product.description}
              name={product.name}
              price={product.price}
              quantity={product.quantity}
              id={product.id}
              key={product.id}
              image={product.image}
            />
          ))} */}
    </div>
  );
}
