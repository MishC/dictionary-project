import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";

export default function Results(props) {
  //function playWord() {}

  if (props.result) {
    return (
      <div className="Results text-center">
        <Phonetics
          phonetics={props.result.phonetics}
          word={props.result.word}
        />
        <p>
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
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
