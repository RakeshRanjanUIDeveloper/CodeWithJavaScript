import React, { useContext } from 'react'
import ThemeContext from './ThemeConext'

const ThemePage = () => {
    const theme = useContext(ThemeContext)
  return (
        <div style={{ background: theme.background, color: theme.color, padding: "20px" }}>
      ThemePage with {theme.color} text on {theme.background} background
    </div>

  )
}

export default ThemePage