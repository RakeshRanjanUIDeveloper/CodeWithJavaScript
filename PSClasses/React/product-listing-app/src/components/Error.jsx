import React from 'react'

const Error = () => {
  return (
    <div className="error-container">
      <div className="error-box">
        <h2>🚨 Error</h2>
        <p>"Oops! Something went wrong."</p>
        <button onClick={() => window.location.reload()}>🔁 Try Again</button>
      </div>
    </div>
  )
}

export default Error