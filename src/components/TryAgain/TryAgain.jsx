import React from "react";
import "./TryAgain.css";

function TryAgain({ words, characters, wpm, startAgain }) {
  return (
    <div>
      <div className="try-again-container">
        <h1>Test Results :</h1>
        <div className="result-container">
          <p>
            <b>characters: </b>
            {characters}
          </p>
          <p>
            <b>words: </b>
            {words}
          </p>
          <p>
            <b>wpm: </b>
            {wpm}
          </p>
        </div>

        <div>
          <button
            onClick={() => {
              startAgain();
            }}
            className="end-buttons start-again-btn"
          >
            Re-Try
          </button>
          <button
            onClick={() => {
              window.open(
                "https://www.facebook.com/sharer/sharer.php?u",
                "facebook-share-dialog",
                "width=800,height=600"
              );
            }}
            className="end-buttons share-btn"
          >
            Share
          </button>
          <button
            onClick={() => {
              window.open(
                "https://twitter.com/intent/tweet?text=tweetnowa",
                "tweet-dialog",
                "width=500",
                "height=500"
              );
            }}
            className="end-buttons tweet-btn"
          >
            Tweet
          </button>
        </div>
      </div>
    </div>
  );
}

export default TryAgain;
