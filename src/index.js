import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const CounterComponent = ({ value, decrement, increment, reset }) => (
  <div className="App">
    <h1>Value: {value}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
    <button onClick={reset}>reset</button>
  </div>
);

class Counter extends React.Component {
  state = {
    value: 0
  };

  decrement = () => {
    this.setState({ value: this.state.value - 1 });
  };
  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };
  reset = () => {
    this.setState({ value: 0 });
  };

  render = () => (
    <CounterComponent
      value={this.state.value}
      decrement={this.decrement}
      increment={this.increment}
      reset={this.reset}
    />
  );
}

const App = () => (
  <div className="App">
    <Counter />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
