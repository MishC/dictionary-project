import React, { useState } from "react";
import "./App.css";

export default function App() {
  let [keyword, setKeyword] = useState("");
  function handleSearchWord(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function search(event) {
    event.preventDefault();
    alert(`You are looking for ${keyword}`);
  }
  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={search}>
          <div className="inline">
            <input
              type="search"
              placeholder="Search a word"
              className="form-control shadow-sm"
              autoFocus="on"
              autoComplete="off"
              onChange={handleSearchWord}
            />
            <input
              type="submit"
              value="Search"
              className="btn btn-primary btn-rounded shadow-sm "
            />
          </div>
        </form>
      </header>
      <main></main>
    </div>
  );
}
