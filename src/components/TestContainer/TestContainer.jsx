import React from "react";
import TypingChallengeContainer from "../TypingCgallengeContainer/TypingChallengeContainer";
import TryAgain from "../TryAgain/TryAgain";
import "./TestContainer.css";

const TestContainer = ({
  selectedParagraph,
  words,
  wpm,
  testInfo,
  characters,
  timerStarted,
  timeReamaining,
  onInputChange,
  startAgain,
}) => {
  // const timeRemaining = 30;

  return (
    <div className="test-container">
      {timeReamaining > 0 ? (
        <div data-aos="fade-up" className="typing-challenge-container">
          <TypingChallengeContainer
            selectedParagraph={selectedParagraph}
            timeReamaining={timeReamaining}
            timerStarted={timerStarted}
            words={words}
            characters={characters}
            wpm={wpm}
            testInfo={testInfo}
            onInputChange={onInputChange}
          />
        </div>
      ) : (
        <div className="try-again-container">
          <TryAgain
            startAgain={startAgain}
            words={words}
            characters={characters}
            wpm={wpm}
          />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
