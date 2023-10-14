import React, { useState } from "react";
import "./Calculator.css"; // Import a CSS file for styling

function Calculator() {
  const [input, setInput] = useState("");

  const handleInput = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const calculateResult = () => {
    try {
      const result = eval(input); // Using eval is not recommended for production apps, but it simplifies this example.
      setInput(result.toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{input}</div>
      <div className="calculator-keypad">
        <div className="keypad-row">
          <button onClick={() => handleInput("7")}>7</button>
          <button onClick={() => handleInput("8")}>8</button>
          <button onClick={() => handleInput("9")}>9</button>
          <button onClick={() => handleInput("+")}>+</button>
        </div>
        <div className="keypad-row">
          <button onClick={() => handleInput("4")}>4</button>
          <button onClick={() => handleInput("5")}>5</button>
          <button onClick={() => handleInput("6")}>6</button>
          <button onClick={() => handleInput("-")}>-</button>
        </div>
        <div className="keypad-row">
          <button onClick={() => handleInput("1")}>1</button>
          <button onClick={() => handleInput("2")}>2</button>
          <button onClick={() => handleInput("3")}>3</button>
          <button onClick={() => handleInput("*")}>*</button>
        </div>
        <div className="keypad-row">
          <button onClick={clearInput}>C</button>
          <button onClick={() => handleInput("0")}>0</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleInput("/")}>/</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
