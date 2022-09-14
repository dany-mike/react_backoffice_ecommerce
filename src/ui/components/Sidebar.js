import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import Hamburger from "hamburger-react";
import "react-pro-sidebar/dist/css/styles.css";
import { useState } from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  const [isCollapsed, setCollapsed] = useState(true);

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
