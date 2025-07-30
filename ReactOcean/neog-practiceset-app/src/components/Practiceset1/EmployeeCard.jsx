import React from 'react'

const EmployeeCard = ({name, designation, workExperience}) => {
  return (
    <h2>{name} is a <span style={{color:'green'}}>{designation}</span> having <span style={{color:'blue'}}>{workExperience}</span> of experience in IT Industry</h2>
  )
}

export default EmployeeCard