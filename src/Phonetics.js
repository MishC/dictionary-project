import React from "react";

export default function Phonetics(props) {
  if (props.phonetics.length === 1) {
    return (
      <div className="Phonetics">
        <h1 className="text-center">
          <a href={props.phonetics.audio} target="_">
            <i class="fas fa-volume-up text-left">&nbsp;&nbsp;</i>
          </a>
          {props.word}
          {"  "}[{props.phonetics[0].text}]
        </h1>
      </div>
    );
  } else {
    return (
      <div className="Phonetics">
        <div className="container">
          <h2 className="d-flex justify-content-center text-align-center">
            <div className="col-6 text-right">{props.word}</div>
            <div className="col-6 text-left">
              {props.phonetics.map(function (phonetic, index) {
                return (
                  <div key={index}>
                    <a href={phonetic.audio} target="_">
                      <i class="fas fa-volume-up">&nbsp;&nbsp;</i>
                    </a>
                    {"  "}[{phonetic.text}]
                  </div>
                );
              })}
            </div>
          </h2>
        </div>
      </div>
    );
  }
}
