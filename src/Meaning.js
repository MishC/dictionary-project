import React from "react";
import Definition from "./Definition";
import Synonyms from "./Synonyms";
import Example from "./Example";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div
            key={index}
            className="section text-justify text-left
           text-break container mt-3"
          >
            <h5>
              <i className="pink-title">{props.meaning.partOfSpeech}</i>{" "}
            </h5>
            <div className="row">
              <Definition definition={definition.definition} />
            </div>
            <br />
            <div className="row">
              <Example example={definition.example} />
            </div>
            <br />
            <div className="row">
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
