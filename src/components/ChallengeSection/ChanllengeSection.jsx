import React from "react";
import TestContainer from "../TestContainer/TestContainer";
import "./ChanllengeSection.css";

const ChanllengeSection = () => {
  return (
    <div className="challenge-section-container">
      <h1 data-aos="fade-down" className="challenge-section-header">
        Take a test now
      </h1>
      <TestContainer words={14} wpm={24} characters={15} />
    </div>
  );
};

export default ChanllengeSection;
