import React from "react";
import TodoSearchCSS from "./TodoSearch.module.css";

function TodoSearch({ search, setSearch }) {
  const SearchChange = (e) => {
    e.preventDefault();
    setSearch((oldValue) => e.target.value);
  };

  return (
    <input
      className={TodoSearchCSS.SearchBox}
      placeholder="Search for..."
      value={search}
      onChange={(e) => SearchChange(e)}
    />
  );
}

export { TodoSearch };
