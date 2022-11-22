import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../api/UsersAPI";
import { useLoading } from "../../context/loading";
import CartItemCard from "../components/CartItemCard/CartItemCard";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export default function UserInfo() {
  const params = useParams();
  const [userInfo, setUserInfo] = useState([]);

  const { loading, setLoading } = useLoading();

  useEffect(() => {
    (async () => {
      setLoading(true);
      setUserInfo(await fetchUserById(params?.userId));
      setLoading(false);
    })();
  }, [params?.userId, setLoading]);
  return loading ? (
    <LoadingSpinner />
  ) : (
    <>
      <p className="font-semibold text-lg">
        {userInfo?.user?.firstname} {userInfo?.user?.lastname}'s Cart
      </p>
      <div className="flex flex-wrap">
        {userInfo?.cart?.length > 0 &&
          userInfo.cart?.map((cart) => (
            <CartItemCard
              description={cart.product.description}
              name={cart.product.name}
              price={cart.product.price}
              quantity={cart.quantity}
              key={cart.id}
              image={cart.product.image}
            />
          ))}
      </div>
    </>
  );
}
