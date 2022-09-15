import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import Hamburger from "hamburger-react";
import "react-pro-sidebar/dist/css/styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import Button from "../Button/Button";

function Sidebar() {
  const stateValue = isMobile ? true : false;
  const [isCollapsed, setCollapsed] = useState(stateValue);

  // TODO fetch pages from API cms module
  const boPages = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Products",
      path: "/products",
    },
    {
      label: "Users",
      path: "/users",
    },
    {
      label: "Text Manager",
      path: "/cms",
    },
  ];

  return (
    <ProSidebar collapsed={isCollapsed}>
      <div className="flex justify-center py-8 lg:hidden">
        <Hamburger
          onToggle={(collapsed) => {
            if (collapsed) {
              setCollapsed(false);
            } else {
              setCollapsed(true);
            }
          }}
          size={20}
        />
      </div>
      <Menu iconShape="square">
        <MenuItem>
          <Link to="/login">
            <Button classNameValue="lg:hidden flex justify-center w-full bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Login
            </Button>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link to="/register">
            <Button classNameValue="lg:hidden flex justify-center bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
              Register
            </Button>
          </Link>
        </MenuItem>
        {boPages.map((item, index) => (
          <MenuItem key={index}>
            {item.label}
            <Link to={item.path} />
          </MenuItem>
        ))}
      </Menu>
    </ProSidebar>
  );
}

export default Sidebar;
