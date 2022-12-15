import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchUserById } from "../../api/UsersAPI";
import { useLoading } from "../../context/loading";
import { getObjectLength } from "../../utils";
import CartItemCard from "../components/CartItemCard/CartItemCard";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import OrderDetailsCard from "../components/OrderDetailsCard/OrderDetailsCard";
import OrderItemCard from "../components/OrderItemCard/OrderItemCard";
import WishlistItemCard from "../components/WishlistItemCard/WishlistItemCard";

export default function UserInfo() {
  const params = useParams();
  const [userInfo, setUserInfo] = useState([]);
  const [orderDetails, setOrderDetails] = useState({});

  const { loading, setLoading } = useLoading();

  useEffect(() => {
    (async () => {
      setLoading(true);
      setUserInfo(await fetchUserById(params?.userId));
      setLoading(false);
    })();
  }, [params?.userId, setLoading]);

  function OrderContent() {
    if (getObjectLength(orderDetails) > 0) {
      return (
        <OrderDetailsCard
          billingAddress={orderDetails.billingAddress}
          orderId={orderDetails.orderId}
          orderItems={orderDetails.orderItems}
          shippingAddress={orderDetails.shippingAddress}
          status={orderDetails.status}
          subtotal={orderDetails.subtotal}
          tax={orderDetails.tax}
          totalPrice={orderDetails.totalPrice}
          key={orderDetails.orderId}
          setOrderDetails={setOrderDetails}
        />
      );
    } else {
      return userInfo.order?.map((order) => (
        <OrderItemCard
          orderId={order.id}
          status={order.status}
          totalPrice={order.totalPrice}
          subtotal={order.subtotal}
          tax={order.tax}
          orderItems={order.orderItems}
          key={order.id}
          billingAddress={order.billingAddress}
          shippingAddress={order.shippingAddress}
          setOrderDetails={setOrderDetails}
        />
      ));
    }
  }

  return loading ? (
    <LoadingSpinner />
  ) : (
    <>
      <div className="flex items-center">
        <p className="font-semibold text-xl mr-3">
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
      <div className="mt-8 flex items-center">
        <p className="mr-3 font-semibold text-xl">
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
      <div className="flex items-center mt-8">
        <p className="font-semibold text-xl mr-3">
          {userInfo?.user?.firstname} {userInfo?.user?.lastname}'s Orders
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="bi bi-receipt fill-red-700"
          viewBox="0 0 16 16"
        >
          <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
          <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
        </svg>
      </div>
      <div className="flex flex-wrap">
        {userInfo?.order?.length > 0 ? (
          <OrderContent />
        ) : (
          <p>
            There is not items in {userInfo?.user?.firstname}{" "}
            {userInfo?.user?.lastname}'s Orders
          </p>
        )}
      </div>
    </>
  );
}
