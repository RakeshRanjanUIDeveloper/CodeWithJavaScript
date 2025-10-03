import React from 'react'

const GetByLabelText = () => {
  return (
    <div>
        <label htmlFor='user-name'>User Name</label>
        <input type='text' id='user-name' />

        <label htmlFor='skills'>Skills</label>
        <input type='checkbox' id='skills' defaultChecked={true} />y

        <label htmlFor='emp-name1'>Employee Name</label>
        <input type='text' id='emp-name1' />
        <label htmlFor='emp-name2'>Employee Name</label>
        <input type='text' id='emp-name2' />
        <label htmlFor='emp-name3'>Employee Name</label>
        <input type='text' id='emp-name3' />
    </div>
  )
}

export default GetByLabelText