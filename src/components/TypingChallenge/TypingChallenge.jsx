import React from "react";
import "./TypingChallenge.css";

const TypingChallenge = ({
  selectedParagraph,
  timeReamaining,
  timerStarted,
}) => {
  return (
    <div className="typing-challenge">
      <div className="timer-container">
        <p className="timer">
          00:{timeReamaining >= 10 ? timeReamaining : "0" + timeReamaining}
        </p>
        <p className="timer-info">
          {!timerStarted && "start typing to start the test"}
        </p>
      </div>

      <div className="textarea-container">
        <div className="textarea-left">
          <div className="textarea test-paragraph">{selectedParagraph}</div>
        </div>
        <div className="textarea-right">
          <textarea
            className="textarea"
            placeholder="start typing ..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallenge;
