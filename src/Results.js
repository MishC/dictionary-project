import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.result) {
    return (
      <div className="Results">
        <h1 className="text-center">
          {props.result.word} {"  "}[{props.result.phonetic}]
        </h1>

        <p>
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index} className="">
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </p>
        <footer className="App-footer text-center pb-5">
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
