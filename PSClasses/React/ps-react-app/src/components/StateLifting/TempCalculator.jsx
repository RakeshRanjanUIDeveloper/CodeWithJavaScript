import React, { useState } from "react";
import TempInput from "./TempInput";

const TempCalculator = () => {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  const handleCelsiusChange = (value) =>{
    setTemperature(value);
    setScale("c")
  }

  const handleFahrenheitChange = (value) =>{
    setTemperature(value)
    setScale("f")
  }


  function toCelsius(f) {
    return ((f - 32) * 5) / 9;
  }
  function toFahrenheit(c) {
    return (c * 9) / 5 + 32;
}
  const celsius =   scale === "f" ? toCelsius(parseFloat(temperature || 0)) : temperature;
  const fahrenheit = scale === "c" ? toFahrenheit(parseFloat(temperature || 0)) : temperature;

  return (
    <React.Fragment>
      <TempInput temperature={celsius} scale="c" onTemperatureChange={handleCelsiusChange} />
      <TempInput temperature={fahrenheit} scale="f" onTemperatureChange={handleFahrenheitChange} />
    </React.Fragment>
  );
};

export default TempCalculator;
