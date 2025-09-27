import React from 'react'

type InputProps = React.ComponentProps<'input'>
const CustomInput = (props : InputProps) => {
  return (
    <div>
        <input {...props} />
    </div>
  )
}

export default CustomInput