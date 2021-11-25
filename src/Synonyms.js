import React, { useState } from "react";

export default function Synonyms(props) {
  //let [synonym, setSynonym] = useState("");

  if (props.synonyms.length > 1) {
    // console.log(props.synonyms);
    //function printArray()
    return (
      <div className="Synonyms d-inline-flex">
        <div className="row">
          <div className="col-2">
            <strong>Synonyms:&nbsp;&nbsp; </strong>
          </div>
        </div>
        <div className="row text-justify">
          {props.synonyms.map(function (synonym, index) {
            return (
              <span key={index} className="synonym-color pr-3">
                {synonym}
              </span>
            );
          })}
        </div>{" "}
      </div>
    );
  } else {
    return null;
  }
}
