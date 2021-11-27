import React from "react";

export default function Phonetics(props) {
  if (props.phonetics.length === 1) {
    return (
      <div className="Phonetics section text-justify-center container mt-3">
        <h1 className="text-center">
          <a href={props.phonetics[0].audio} target="_">
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
        <div className="d-flex container section mt-3">
          <div className="col-md-5 text-right pr-4">
            <h1 className="text-right">{props.word}</h1>
          </div>
          <div className="col-md-6 text-leff">
            {props.phonetics.map(function (phonetic, index) {
              return (
                <div key={index}>
                  <h1 className="text-left pr-2">
                    <a href={phonetic.audio} target="_" rel="noreferrer">
                      <i class="fas fa-volume-up">&nbsp;&nbsp;</i>
                    </a>
                    {"  "}[{phonetic.text}]
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
