import React, { useState } from "react";
import ReactHowler from "react-howler";

export default function Phonetics(props) {
  let [state, setState] = useState({ playing: false, timeClick: 0 });
  function handlePause() {
    setState({
      playing: false,
      timeClick: 0,
    });
  }
  function handlePlay() {
    setState({
      playing: true,
      timeClick: 1,
    });
  }
  console.log(props.phonetics);

  if (props.phonetics.length === 1) {
    if (props.phonetics[0].audio === "") {
      return (
        <div className="Phonetics section text-justify-center container mt-3">
          <h1 className="text-center">
            {props.word}
            {"  "}[{props.phonetics[0].text}]
          </h1>
        </div>
      );
    } else {
      return (
        <div className="Phonetics section text-justify-center container mt-3 ms-0 py-5">
          <h1 className="text-center text-nowrap">
            <i class="fas fa-volume-up icon" onClick={handlePlay}>
              &nbsp;&nbsp;{" "}
              <ReactHowler
                src={props.phonetics[0].audio}
                playing={state.playing}
                onEnd={handlePause}
              />
            </i>
            {props.word} {"  "}[{props.phonetics[0].text}]
          </h1>
        </div>
      );
    }
  } else if (props.phonetics.length > 1) {
    return (
      <div className="Phonetics">
        <div className="d-flex container section mt-3">
          <div className="col-md-5 text-right pr-2">
            <h1 className="text-right pl-4">{props.word}</h1>
          </div>
          <div className="col-md-6 text-left">
            {props.phonetics.map((phonetic, index) => {
              /*at https://dictionaryapi.dev/ is just one audio file, if there are two alternatives of pronunciation
              and that is by rule the audio for the first alternative*/

              if (phonetic.text && phonetic.audio) {
                return (
                  <div key={index}>
                    <h1 className="text-left pr-2">
                      <i class="fas fa-volume-up icon" onClick={handlePlay}>
                        &nbsp;&nbsp;{" "}
                        <ReactHowler
                          src={phonetic.audio}
                          playing={state.playing}
                          onEnd={handlePause}
                        />
                      </i>
                      {"  "}[{phonetic.text}]
                    </h1>
                  </div>
                );
              } else if (phonetic.text && !phonetic.audio) {
                return (
                  <div key={index}>
                    <h1 className="text-left pr-2">
                      {"  "}[{phonetic.text}]
                    </h1>
                  </div>
                );
              } else return null;
            })}{" "}
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Phonetics section text-justify-center container mt-3">
        <h1 className="text-center">
          {props.word}
          {"  "}[{props.phonetics[0].text}]
        </h1>
      </div>
    );
  }
}
