import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChanllengeSection.css";

const ChanllengeSection = ({
  selectedParagraph,
  words,
  wpm,
  characters,
  timerStarted,
  timeReamaining,
  testInfo,
  onInputChange,
  startAgain,
}) => {
  // console.log();
  return (
    <div className="challenge-section-container">
      <h1 data-aos="fade-down" className="challenge-section-header">
        Take a test now
      </h1>
      <TestContainer
        testInfo={testInfo}
        selectedParagraph={selectedParagraph}
        timeReamaining={timeReamaining}
        timerStarted={timerStarted}
        words={words}
        wpm={wpm}
        characters={characters}
        onInputChange={onInputChange}
        startAgain={startAgain}
      />
    </div>
  );
};

export default ChanllengeSection;
