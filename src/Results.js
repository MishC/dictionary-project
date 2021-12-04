import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import Photos from "./Photos";

export default function Results(props) {
  if (props.result) {
    let breaking = false;

    return (
      <div className="Results text-center pt-4 pb-4">
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
        {props.result.meanings.map(function (meaning, index) {
          let len = props.result.meanings.length - 1;

          if (breaking === false) {
            if (
              index === 0 &&
              (meaning.partOfSpeech === "preposition" ||
                meaning.partOfSpeech === "prefix" ||
                meaning.partOfSpeech === "conjunction" ||
                meaning.partOfSpeech === "sufix" ||
                meaning.partOfSpeech === "contraction")
            ) {
              breaking = true;
              return null;
            } else if (index === len) {
              return (
                <div>
                  <Photos photos={props.photos} />
                </div>
              );
            } else {
              return null;
            }
          } else {
            return null;
          }
        })}{" "}
      </div>
    );
  } else {
    return null;
  }
}
