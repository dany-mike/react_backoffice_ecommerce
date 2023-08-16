import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import Hamburger from "hamburger-react";
import "react-pro-sidebar/dist/css/styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { isMobile } from "react-device-detect";
import useAuth from "../../../context/auth";
import { logout } from "../../../api/AuthAPI";

function Sidebar({ isAuthenticated, user }) {
  const { dispatch } = useAuth();

  const handleLogout = () => {
    logout();
    dispatch({ type: "LOGOUT" });
  };

  const stateValue = isMobile ? true : false;
  const [isCollapsed, setCollapsed] = useState(stateValue);

  const boLinks = [
    {
      label: "Create Admin",
      path: "/register",
    },
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Products",
      path: "/products",
    },
    {
      label: "Categories",
      path: "/categories",
    },
    {
      label: "Users",
      path: "/users",
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
        {isAuthenticated ? (
          boLinks.map((item, index) => (
            <MenuItem key={index}>
              {item.label}
              <Link to={item.path} />
            </MenuItem>
          ))
        ) : (
          <MenuItem onClick={handleLogout}>
            Login
            <Link to="/login" />
          </MenuItem>
        )}
        {isAuthenticated ? (
          <MenuItem onClick={handleLogout} className="lg:hidden font-bold">
            Logout
          </MenuItem>
        ) : (
          <></>
        )}
      </Menu>
    </ProSidebar>
  );
}

export default Sidebar;
