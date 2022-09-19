import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import Hamburger from "hamburger-react";
import "react-pro-sidebar/dist/css/styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import useAuth from "../../../context/auth";
import { logout } from "../../../api/AuthAPI";

function Sidebar() {
  const {
    state: { isAuthenticated },
    dispatch,
  } = useAuth();

  const handleLogout = () => {
    logout();
    dispatch({ type: "LOGOUT" });
  };

  const stateValue = isMobile ? true : false;
  const [isCollapsed, setCollapsed] = useState(stateValue);

  const authLinks = [
    {
      label: "Login",
      path: "/login",
    },
    {
      label: "Register",
      path: "/register",
    },
  ];

  // TODO fetch pages from API cms module
  const boLinks = [
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
        {!isAuthenticated ? (
          authLinks.map((item, index) => (
            <MenuItem key={index}>
              {item.label}
              <Link to={item.path} />
            </MenuItem>
          ))
        ) : (
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        )}
        {boLinks.map((item, index) => (
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
