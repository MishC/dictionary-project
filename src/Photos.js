import React from "react";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="section container d-flex mt-3">
          {" "}
          <div className="row p-0">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-lg-4" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <img
                      src={photo.src.landscape}
                      alt=""
                      className="image-fluid"
                    />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
