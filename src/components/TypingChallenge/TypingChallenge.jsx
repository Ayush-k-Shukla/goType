import React from "react";
import TestLetter from "../TestLetter/TestLetter";
import "./TypingChallenge.css";
// import TestLetter from "../TestLetter/TestLetter";

const TypingChallenge = ({
  selectedParagraph,
  timeReamaining,
  testInfo,
  timerStarted,
  onInputChange,
}) => {
  // console.log(testInfo);
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
          <div className="textarea test-paragraph">
            {/* {selectedParagraph} */}
            {testInfo.map((individualLetterInfo, index) => {
              return (
                <TestLetter
                  key={index}
                  individualLetterInfo={individualLetterInfo}
                />
              );
            })}
          </div>
        </div>
        <div className="textarea-right">
          <textarea
            onPaste={(e) => {
              e.preventDefault();
              return false;
            }}
            onChange={(e) => onInputChange(e.target.value)}
            className="textarea"
            placeholder="start typing ..."
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallenge;
