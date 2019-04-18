import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";

import "./styles.css";

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    default:
      return state;
  }
};

const store = createStore(reducer);

const CounterComponent = ({ value, decrement, increment, reset }) => (
  <div className="App">
    <h1>Value: {value}</h1>
    <button onClick={decrement}>-</button>
    <button onClick={increment}>+</button>
    <button onClick={reset}>reset</button>
  </div>
);

const App = () => (
  <div className="App">
    <CounterComponent
      value={store.getState()}
      decrement={() => store.dispatch({ type: "DECREMENT" })}
      increment={() => store.dispatch({ type: "INCREMENT" })}
      reset={() => store.dispatch({ type: "RESET" })}
    />
  </div>
);

const rootElement = document.getElementById("root");

const render = () => ReactDOM.render(<App />, rootElement);

store.subscribe(render);
render();
