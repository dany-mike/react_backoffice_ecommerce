import { Link } from "react-router-dom";

export default function ASidebarMenuItem({ item }) {
  return (
    <Link
      to={item.path}
      className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
    >
      <svg
        className="w-6 h-6 fill-current inline-block"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={item.iconUrl}></path>
      </svg>
      <span>{item.label}</span>
    </Link>
  );
}
