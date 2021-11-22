import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.result) {
    return (
      <div class="Results">
        <h2 className="d-flex">
          {props.result.word} {"  "}[{props.result.phonetic}]
        </h2>
        <br />
        <p>
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </p>
        <footer className="App-footer">
          <small>Coded by MishC</small>
        </footer>
      </div>
    );
  } else {
    return null;
  }
}
