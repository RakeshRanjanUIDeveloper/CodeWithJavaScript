import React from 'react'

const DropDown = ({todo}) => {
  const statusOptions = ['Backlog', 'Inprogress', 'Completed'];
  const handleStatus = () =>{

  }
  return (
    <select className="status-dropdown" value={todo.status} onChange={() => handleStatus()}>
        {
            statusOptions.map((status) => (
                <option key={status} value={status}>{status}</option>
            ))
        }
    </select>
  )
}

export default DropDown