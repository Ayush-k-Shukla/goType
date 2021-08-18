import React from "react";
import "./TypingChallengeContainer.css";
import ChallengeDetailsCard from "../ChallengeDetailsCard/ChallengeDetailsCard";
import TypingChallenge from "../TypingChallenge/TypingChallenge";

function TypingChallengeContainer({ words, characters, wpm }) {
  return (
    <div className="typing-challenge-container">
      {/* Deatils Section */}
      <div className="details-container">
        {/* words typed */}
        <ChallengeDetailsCard cardName="words" cardValue={words} />

        {/* character typed */}
        <ChallengeDetailsCard cardName="Characters" cardValue={characters} />
        {/* speed */}
        <ChallengeDetailsCard cardName="speed" cardValue={wpm} />
      </div>
      {/* The Real challenge section */}
      <div className="typewriter-container">
        <TypingChallenge selectedParagraph="hii there" />
      </div>
    </div>
  );
}

export default TypingChallengeContainer;
