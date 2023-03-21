import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "./components/menu.js";
import SubPage from "./components/SubPage.js";

function App() {
  return (
    <div className="App">
      <Menu />
      <Routes>
        <Route path="/:subpage" component={SubPage} />
      </Routes>
    </div>
  );
}

export default App;
