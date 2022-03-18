import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import image_UK from "./images/UK.png";
import image_US from "./images/USA.png";
import image_AU from "./images/AU.png";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [result, setResult] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleSearchWord(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function handleResponse(response) {
    setResult(response.data[0]);
    //console.log(result.meanings);
  }
  function handlePexelsResponse(response) {
    //console.log(response.data);

    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    //
    //documentation https://dictionaryapi.dev/
    let apiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/" + keyword;
    let pexelsApiKey =
      "563492ad6f91700001000001bb0924acb1ac41678390c6c5fc3c1d23";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(apiUrl).then(handleResponse);

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }

  return (
    <div className="Dictionary">
      <header className="App-header p-1 shadow-md">
        <h1> Online Dictionary </h1>
        <div className="d-inline-block">
          <img
            src={image_UK}
            width="60"
            height="40"
            alt="UK"
            className="px-2"
          />
          <img
            src={image_US}
            width="60"
            height="30"
            alt="US"
            className="px-2"
          />
          <img
            src={image_AU}
            width="60"
            height="30"
            alt="AU"
            className="px-2"
          />
        </div>
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
        <Results keyword={keyword} result={result} photos={photos} />
      </main>
      <footer className="App-footer text-center pb-5">
        <small>
          <a
            href="https://github.com/MishC/dictionary-project"
            target="_"
            title="SourceCode"
            rel="noreferrer"
          >
            Coded by MishC
          </a>
        </small>
      </footer>
    </div>
  );
}
