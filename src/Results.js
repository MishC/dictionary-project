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

        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
