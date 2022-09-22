import { useEffect, useState } from "react";
import { getAdminUsers } from "../../api/AuthAPI";
import useAuth from "../../context/auth";
import ErrorMessageRendered from "../components/ErrorMessageRendered/ErrorMessageRendered";

export default function Users() {
  const [users, setUsers] = useState([]);
  const {
    state: { user },
  } = useAuth();

  useEffect(() => {
    (async () => {
      const response = await getAdminUsers();
      setUsers(response);
    })();
  }, [user]);

  return (
    <div>
      {true ? (
        <div className="p-4 w-full max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex justify-between items-center mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
              Users
            </h5>
          </div>
          <div className="flow-root">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {users.map((user) => (
                <li className="py-3 sm:py-4" key={user.id}>
                  <div className="flex items-center space-x-4">
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {user.firstname} {user.lastname}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {user.email}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <>
          <ErrorMessageRendered>
            <span className="font-bold text-xl">Role: TOTO</span>
          </ErrorMessageRendered>
          <ErrorMessageRendered>
            <span className="font-bold text-xl">
              You don't have permissions to manage users
            </span>
          </ErrorMessageRendered>
        </>
      )}
    </div>
  );
}
