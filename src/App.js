import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function App() {
  let [keyword, setKeyword] = useState("");
  function handleSearchWord(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }
  function handleResponse(response) {
    console.log(response.data[0], response.data[1]);
  }
  function search(event) {
    event.preventDefault();
    alert(`You are looking for ${keyword}`);
    //documentation https://dictionaryapi.dev/
    let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/" + keyword;
    axios.get(apiUrl).then(handleResponse);
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
