import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_MENU_ITEMS } from "../queries.js";
import Nav from "./styledNav.js";

function Navbar() {
  const location = useLocation();
  const [activeUrl, setActiveUrl] = useState("/");
  const { loading, error, data } = useQuery(GET_MENU_ITEMS);

  const handleClick = (menuItem) => {
    setActiveUrl(menuItem.url);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const menuItems = data.menuItems.data;
  const filtered = menuItems.map((item) => item.attributes);

  return (
    <Nav>
      <ul>
        {filtered.map((menuItem, index) => (
          <li
            className={menuItem.url === activeUrl ? "active" : "disabled"}
            key={index}
          >
            {menuItem.url !== location.pathname && (
              <Link to={menuItem.url} onClick={() => handleClick(menuItem)}>
                {menuItem.title}
              </Link>
            )}
            {menuItem.url === location.pathname && (
              <span>{menuItem.title}</span>
            )}
            {menuItem.submenuItems && menuItem.submenuItems.length > 0 && (
              <ul>
                {menuItem.submenuItems.map((submenuItem) => (
                  <li key={submenuItem.id}>
                    <Link to={submenuItem.url}>{submenuItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </Nav>
  );
}

export default Navbar;
