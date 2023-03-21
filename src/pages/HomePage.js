import React from "react";
import { useQuery } from "@apollo/client";
import { GET_MENU_ITEMS } from "../queries.js";

function HomePage() {
  const { loading, error, data } = useQuery(GET_MENU_ITEMS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const menuItems = data.menuItems;

  return (
    <div>
      <h1>Welcome to my app!</h1>
      <p>This is the homepage.</p>
      <nav>
        <ul>
          {menuItems.map((item) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
