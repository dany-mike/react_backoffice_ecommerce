import { useEffect, useState } from "react";
import { fetchUsers } from "../../api/UsersAPI";
import { useLoading } from "../../context/loading";
import LoadingSpinner from "../components/LoadingSpinner/LoadingSpinner";
import UsersCard from "../components/UsersCard/UsersCard";

export default function Users() {
  const [users, setUsers] = useState([]);

  const { loading, setLoading } = useLoading();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await fetchUsers();
      setUsers(data);
      setLoading(false);
    };
    fetchData().catch(console.error);
  }, [setLoading]);

  return loading ? (
    <LoadingSpinner />
  ) : (
    <div className="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
          Latest Customers
        </h3>
      </div>
      <div className="flow-root">
        <UsersCard users={users} />
      </div>
    </div>
  );
}
