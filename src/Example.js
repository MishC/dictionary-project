import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example d-inline-flex">
        <div className="row">
          <div className="col-2">
            <strong>Example:&nbsp;</strong>
          </div>
        </div>
        <div className="row">
          <em>{props.example}</em>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
