import React from "react";

export default function Definition(props) {
  if (props.definition) {
    return (
      <div className="Definition d-inline-flex">
        <div className="row">
          <div className="col-2">
            <strong>Definition:&nbsp;&nbsp;</strong>
          </div>
        </div>
        <div className="row">
          <span>{props.definition}</span>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
