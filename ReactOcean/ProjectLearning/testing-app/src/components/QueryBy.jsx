import React from 'react'

const QueryBy = () => {
    const isLogin = true;
  return (
    <div>
        <h2>QueryBy</h2>
        {
            isLogin ? <button>Logout</button> : <button>Login</button>
        }
    </div>
  )
}

export default QueryBy