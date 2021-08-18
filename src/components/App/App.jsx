import React, { Component } from "react";
import Navbar from "../Navbar/Navbar";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer";
import "./App.css";
import ChanllengeSection from "../ChallengeSection/ChanllengeSection";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        {/* nav Section */}
        <Navbar />

        {/* landing page */}
        <Landing />

        {/* challenge section*/}
        <ChanllengeSection />

        {/* footer components */}
        <Footer />
      </div>
    );
  }
}
