import { useEffect, useState } from "react";
import { fetchUserById, fetchUserCart } from "../../api/UsersAPI";
import { useLoading } from "../../context/loading";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";

export default function UserCart() {
  const [user, setUser] = useState([]);
  const [cart, setCart] = useState([]);

  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchUserById();
      const cart = await fetchUserCart();
      setUser(data);
      setCart(cart)
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, [setLoading]);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      User Cart
    </div>
  );
}
