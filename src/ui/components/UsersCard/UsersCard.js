import { Link } from "react-router-dom";
import Button from "../Button/Button";

export default function UsersCard({ users }) {
  return (
    <div>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {users.length > 0 &&
          users?.map((user) => (
            <li className="pt-3 pb-0 sm:pt-4 mt-2" key={user.id}>
              <div className="flex items-center space-x-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center">
                    <div>
                      <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                        {user.firstname} {user.lastname}
                      </p>
                      <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        {user.email}
                      </p>
                    </div>
                    <div className="text-white flex justify-center hover:cursor-pointer bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 mt-1 ml-auto">
                      <Link to={`/cart/${user.id}`}>
                        <Button>User cart</Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
}
