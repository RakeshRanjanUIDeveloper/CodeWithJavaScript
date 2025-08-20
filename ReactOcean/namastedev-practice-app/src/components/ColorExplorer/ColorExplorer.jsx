import React, { useState } from "react";
import { colorNameToHex } from "./ColorData";
import "./ColorExplorer.css";

const ColorExplorer = () => {
    const [input, setInput] = useState('')
    const [hex, setHex] = useState('')
    const handleChange = (e) =>{
        const value = e.target.value.toLowerCase();
        setInput(value)
    }

    const handleSearch = () =>{
        const hexValue = colorNameToHex(input)
        setHex(hexValue);
    }
  return (
    <div className="container">
      <h1>Color Explorer</h1>
      <div className="input-section">
        <input type="text" data-testid="color-input" placeholder="Type a color name e.g. lavender" onChange={handleChange} />
        <button data-testid="search-button" onClick={handleSearch}>🔍</button>
      </div>
      <div className="color-box" data-testid="color-box">
        <div className="preview"  role="presentation"  data-testid="color-preview"  style={{backgroundColor:hex}}></div>
        <p data-testid="color-name">
          <strong>Name:{input}</strong>
        </p>
        <p data-testid="color-hex">
          <strong>Hex:{hex || "Not found"}</strong>
        </p>
      </div>
    </div>
  );
};

export default ColorExplorer;
