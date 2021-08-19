import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import "./App.css";
import ChanllengeSection from "../ChallengeSection/ChanllengeSection";

const totalTime = 60;
const serviceUrl = "http://metaphorpsum.com/paragraphs/1/9";

export default class App extends Component {
  state = {
    selectedParagraph: "Hello world",
    timerStarted: false,
    timeReamaining: totalTime,
    words: 0,
    characters: 0,
    wpm: 0,
  };

  componentDidMount() {
    // fetch(serviceUrl).then((res) =>
    //   res.text().then((info) => {
    //     this.setState({ selectedParagraph: info });
    //     // console.log("response is: " + info);
    //   })
    // );
  }

  render() {
    // console.log("rendering...");
    return (
      <div className="app">
        {/* nav Section */}
        <Navbar />

        {/* landing page */}
        <Landing />

        {/* challenge section*/}
        <ChanllengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timerStarted={this.state.timerStarted}
          timeReamaining={this.state.timeReamaining}
        />

        {/* footer components */}
        <Footer />
      </div>
    );
  }
}
