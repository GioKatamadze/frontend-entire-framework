import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

const GET_MENU_ITEMS = gql`
  query {
    menuItems {
      id
      title
      url
      subItems {
        id
        title
        url
      }
    }
  }
`;

function Menu() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const { loading, error, data } = useQuery(GET_MENU_ITEMS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :(</p>;
  }

  const menuItems = data.menuItems;

  const handleMenuItemClick = (index) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <nav>
      {menuItems.map((item, index) => {
        const isActive = activeIndex === index;
        const subMenuItems = item.subItems || [];

        return (
          <React.Fragment key={item.id}>
            <button
              className={`menu-item${isActive ? " active" : ""}`}
              onClick={() => handleMenuItemClick(index)}
            >
              {item.title}
            </button>

            {isActive && (
              <ul className="submenu">
                {subMenuItems.map((subItem) => (
                  <li key={subItem.id}>
                    <a href={subItem.url}>{subItem.title}</a>
                  </li>
                ))}
              </ul>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}

export default Menu;
