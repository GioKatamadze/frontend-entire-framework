import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_MENU_ITEMS } from "../queries.js";

function SubPage() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(GET_MENU_ITEMS, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  const menuItems = data.menuItems.data;
  const filtered = menuItems.map((item) => item.attributes);

  return (
    <div>
      <h1>{filtered.title}</h1>
      <p>{filtered.content}</p>
    </div>
  );
}

export default SubPage;
