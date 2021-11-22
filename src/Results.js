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
          <small>
            <a
              href="https://github.com/MishC/dictionary-project"
              target="_"
              title="SourceCode"
            >
              Coded by MishC
            </a>
          </small>
        </footer>
      </div>
    );
  } else {
    return null;
  }
}
