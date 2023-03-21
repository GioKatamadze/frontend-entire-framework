import React from "react";
import { useLocation } from "react-router-dom";

function SubPage() {
  const location = useLocation();
  const subpage = location.pathname.substr(1);

  return (
    <div className="SubPage">
      <h1>{subpage}</h1>
      <p>This is the {subpage} subpage.</p>
    </div>
  );
}

export default SubPage;
