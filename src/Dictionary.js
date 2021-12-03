import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import image from "./images/UK.png";

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
      <header className="App-header p-5 shadow-md">
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
        <Photos photos={photos} result={result} />
      </main>
    </div>
  );
}
