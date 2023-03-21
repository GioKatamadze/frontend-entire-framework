import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MENU_ITEMS } from "../queries.js";
import "./menu.css";

function Menu() {
  const { loading, error, data } = useQuery(GET_MENU_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const menuItems = data.menuItems;

  return (
    <ul className="menu">
      {menuItems.map((menuItem) => (
        <li
          key={menuItem.id}
          className={`menu-item${menuItem.active ? " active" : ""}`}
        >
          <a href={menuItem.url}>{menuItem.title}</a>
          {menuItem.submenu && (
            <ul className="submenu">
              {menuItem.submenu.map((subMenuItem) => (
                <li key={subMenuItem.id} className="submenu-item">
                  <a href={subMenuItem.url}>{subMenuItem.title}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Menu;
