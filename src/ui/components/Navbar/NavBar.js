import Button from "../Button/Button";
import "react-pro-sidebar/dist/css/styles.css";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  // TODO fetch title from API cms module
  const appTitle = "Ecommerce BackOffice";

  return (
    <nav className="font-sans py-4 px-6 navbar-background shadow sm:items-baseline w-full flex items-center">
      <div className="mb-2 sm:mb-0">
        <p className="text-2xl no-underline navbar-text">{appTitle}</p>
      </div>
      <div className="ml-auto flex items-center py-4">
        <Link to="/login">
          <Button classNameValue="hidden lg:block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mx-8">
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button classNameValue="hidden lg:block bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
            Register
          </Button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
