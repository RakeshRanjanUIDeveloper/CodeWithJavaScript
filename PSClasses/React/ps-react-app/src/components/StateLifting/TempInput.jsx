import React from 'react'

const TempInput = ({scale, temperature, onTemperatureChange }) => {
    const scaleNames = {
        c: 'Celsius',
        f: 'Fahrenheit'
    }
  return (
    <div style={{ margin: "10px 0" }}>
        <label>{scaleNames[scale]}</label>
        <input value={temperature} onChange={(e) => onTemperatureChange(e.target.value)} />
    </div>
  )
}

export default TempInput