import "react-pro-sidebar/dist/css/styles.css";
import "./Navbar.css";

function Navbar() {
  // TODO fetch title from API cms module
  const appTitle = "Ecommerce BackOffice";

  return (
    <nav className="font-sans py-4 px-6 navbar-background shadow sm:items-baseline w-full">
      <div className="mb-2 sm:mb-0">
        <p className="text-2xl no-underline navbar-text">{appTitle}</p>
      </div>
    </nav>
  );
}

export default Navbar;
