import React from 'react'

const MultipleElement = () => {
  return (
    <div>
        <button>Click 1</button>
        <button>Click 2</button>
        <label htmlFor='input1'>User Name</label>
        <input type='text' id='input1' />
        <label htmlFor='input2'>User Age</label>
        <input type='text' id='input2' />
        <div role='status'>Hello</div>

        <time>Click Me</time>
        <time>Click Me</time>

        <label htmlFor='skills'>Skills</label>
        <input type='checkbox' id='skills' checked={true} />
    </div>
  )
}

export default MultipleElement