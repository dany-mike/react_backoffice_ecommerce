import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../api/UsersAPI";
import { useLoading } from "../../context/loading";
import CartItemCard from "../components/CartItemCard/CartItemCard";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import WishlistItemCard from "../components/WishlistItemCard/WishlistItemCard";

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
      <div className="flex items-center">
        <p className="font-semibold text-xl mr-2">
          {userInfo?.user?.firstname} {userInfo?.user?.lastname}'s Cart
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-cart fill-red-700"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
      </div>

      <div className="flex flex-wrap">
        {userInfo?.cart?.length > 0 ? (
          userInfo.cart?.map((cart) => (
            <CartItemCard
              name={cart.product.name}
              price={cart.product.price}
              quantity={cart.quantity}
              key={cart.id}
              image={cart.product.image}
            />
          ))
        ) : (
          <p>
            There is no items in {userInfo?.user?.firstname}{" "}
            {userInfo?.user?.lastname}'s Cart
          </p>
        )}
      </div>
      <div className="font-semibold text-xl mt-8 flex items-center">
        <p className="mr-3">
          {userInfo?.user?.firstname} {userInfo?.user?.lastname}'s Wishlist
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-heart-fill fill-red-700"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
      </div>
      <div className="flex flex-wrap">
        {userInfo?.wishlist?.length > 0 ? (
          userInfo.wishlist?.map((wishlist) => (
            <WishlistItemCard
              name={wishlist.product.name}
              price={wishlist.product.price}
              key={wishlist.id}
              image={wishlist.product.image}
            />
          ))
        ) : (
          <p>
            There is not items in {userInfo?.user?.firstname}{" "}
            {userInfo?.user?.lastname}'s Wishlist
          </p>
        )}
      </div>
    </>
  );
}
