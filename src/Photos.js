import React from "react";

export default function Photos(props) {
  /*I am trying to not generate photos in some cases*/
  /*let [type, setType] = useState(false);
  if (props.result) {
    props.result.meanings.map(function (meaning, index) {
      if (index === 0) {
        setType(
          meaning.partOfSpeech === "preposition" ||
            meaning.partOfSpeech === "prefix" ||
            meaning.partOfSpeech === "conjunction" ||
            meaning.partOfSpeech === "sufix"
        );
        //console.log(type);
      }

      return null;
    });
  }*/

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
        <footer className="App-footer text-center pb-5">
          <small>
            <a
              href="https://github.com/MishC/dictionary-project"
              target="_"
              title="SourceCode"
              rel="noreferrer"
            >
              Coded by MishC
            </a>
          </small>
        </footer>
      </div>
    );
  } else {
    return null;
  }
}
