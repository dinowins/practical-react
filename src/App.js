import React, { Component } from "react";
import ImageSlider from "./components/ImageSlider";
import "./App.css";

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

  render() {
    return (
      <div className="App">
        <ImageSlider/>
      </div>
    );
  }
}

export default App;
