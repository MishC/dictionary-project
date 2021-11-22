import React from "react";
import Meaning from "./Meaning";

export default function Results(props) {
  if (props.result) {
    return (
      <div class="Results">
        <h2 className="d-flex">
          {props.result.word} {"  "}[{props.result.phonetic}]
        </h2>
        <p>
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </p>
      </div>
    );
  } else {
    return (
      <div class="Result">
        <p> Sorry the word "{props.keyword}" is not in our database.</p>
      </div>
    );
  }
}
