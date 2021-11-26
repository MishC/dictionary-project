import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import image from "./images/UK.png";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);

  function handleSearchWord(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    console.log(response.data[0]);
    setResult(response.data[0]);
  }
  function search(event) {
    event.preventDefault();
    //
    //documentation https://dictionaryapi.dev/
    let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/" + keyword;
    axios.get(apiUrl).then(handleResponse);
  }
  return (
    <div className="Dictionary">
      <header className="App-header p-5">
        <h1>
          {" "}
          Online Dictionary <img src={image} width="60" alt="GB" />
        </h1>

        <form onSubmit={search} className="pb-5">
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
      <main>
        <Results keyword={keyword} result={result} />
      </main>
    </div>
  );
}
