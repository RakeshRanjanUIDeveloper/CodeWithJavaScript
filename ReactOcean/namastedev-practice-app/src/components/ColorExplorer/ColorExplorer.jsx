import React, { useState } from "react";
import { colorNameToHex } from "./ColorData";
import "./ColorExplorer.css";

const ColorExplorer = () => {
  const [input, setInput] = useState("");
  const [hex, setHex] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setInput(value);
  };

  const handleSearch = () => {
    setHasSearched(true); // user has attempted a search
    const hexValue = colorNameToHex(input);
    setHex(hexValue || ""); // clear if not found
  };

  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input
          type="text"
          data-testid="color-input"
          placeholder="Type a color name e.g. lavender"
          onChange={handleChange}
        />
        <button data-testid="search-button" onClick={handleSearch}>
          🔍
        </button>
      </div>

      <div className="color-box" data-testid="color-box">
        <div
          className="preview"
          role="presentation"
          data-testid="color-preview"
          style={{
            backgroundColor: hex || "transparent",
            width: "100px",
            height: "50px",
            border: "1px solid #000",
          }}
        ></div>

        <p data-testid="color-name">
          <strong>Name: {input}</strong>
        </p>

        {hex && (
          <p data-testid="color-hex">
            <strong>Hex: {hex}</strong>
          </p>
        )}

        {hasSearched && !hex && (
          <p data-testid="error-msg">
            <strong>Error: Color not recognized</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default ColorExplorer;
