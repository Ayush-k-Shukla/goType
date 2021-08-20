import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import "./App.css";
import ChanllengeSection from "../ChallengeSection/ChanllengeSection";

const totalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/11";
const defaultState = {
  selectedParagraph: "",
  timerStarted: false,
  timeReamaining: totalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
};

export default class App extends Component {
  state = defaultState;
  fetchParagraph = () => {
    fetch(serviceUrl).then((res) =>
      res.text().then((info) => {
        const selectedParagraphArray = info.split("");
        console.log("arrat: " + selectedParagraphArray);
        const testInfo = selectedParagraphArray.map((sletter) => {
          return {
            testLetter: sletter,
            status: "notAttempted",
          };
        });
        this.setState({
          ...defaultState,
          testInfo: testInfo,
          selectedParagraph: info,
        });
      })
    );
  };

  componentDidMount() {
    this.fetchParagraph();
  }

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeReamaining > 0) {
        //changing wpm runtime
        const timeSpent = totalTime - this.state.timeReamaining;
        const wpm =
          timeSpent > 0 ? (this.state.words / timeSpent) * totalTime : 0;
        this.setState({
          wpm: parseInt(wpm),
          timeReamaining: this.state.timeReamaining - 1,
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
  };

  startAgain = () => {
    this.fetchParagraph();
  };

  handleUserInput = (inputValue) => {
    if (!this.state.timerStarted) {
      this.startTimer();
    }
    const characters = inputValue.length;
    const words = inputValue.split(" ").length;
    const index = characters - 1;
    //underflow case
    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: "notAttempted",
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });
      return;
    }

    //overflow case
    if (index >= this.state.selectedParagraph.length) {
      this.setState({ characters, words });
      return;
    }

    //changing other case backspace
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1))
      testInfo[index + 1].status = "notAttempted";

    //correct typed letters
    const isCorrect = inputValue[index] === testInfo[index.testLetter];
    testInfo[index].status = isCorrect ? "correct" : "incorrect";
    this.setState({
      testInfo,
      words,
      characters,
    });
    // console.log(inputValue);
  };
  render() {
    // console.log(this.state.testInfo);
    return (
      <div className="app">
        <Navbar />
        <Landing />
        <ChanllengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          testInfo={this.state.testInfo}
          timerStarted={this.state.timerStarted}
          timeReamaining={this.state.timeReamaining}
          onInputChange={this.handleUserInput}
          startAgain={this.startAgain}
        />

        {/* footer components */}
        <Footer />
      </div>
    );
  }
}
