import React, { useState } from "react";
import "./EvenOrOddChecker.css";

const EvenOrOddChecker = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleCheck = () => {
    const trimmedInput = input.trim();

    setResult("");

    if (trimmedInput === "" || isNaN(trimmedInput)) {
      setResult("Please enter a valid number.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const number = parseInt(trimmedInput, 10);
      const isEven = number % 2 === 0;
      setResult(`The number ${number} is ${isEven ? "even" : "odd"}.`);
      setLoading(false);
    }, 1000);
  };
  return (
    <div className="even-odd-container">
      <h1 className="title">Even or Odd Checker</h1>
      <input
        className="number-input"
        type="text"
        placeholder="Enter a number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="check-button" onClick={handleCheck}>
        Check
      </button>
      <div className="result-area">
        <div className="result">
            {
                loading && <p>Checking...</p>
            }
            {
                !loading && result && <p>{result} </p>
            }
        </div>
      </div>
    </div>
  );
};

export default EvenOrOddChecker;
