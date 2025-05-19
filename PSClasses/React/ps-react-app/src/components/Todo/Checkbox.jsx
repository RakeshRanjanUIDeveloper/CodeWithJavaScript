import React from 'react'

const Checkbox = ({options, onChange, selectedValues}) => {

    const handleCheckbox = (e) =>{
        const {value, checked} = e.target;
        if(checked){
            onChange([...selectedValues, value])
        }else{
            onChange(selectedValues.filter((val) => val !== value))
        }
    }
  return (
    <div className='checkbox-wrapper'>
        <div className='checkbox-container'>
            {
                options.map((option) => (
                    <label key={option} htmlFor={option}>
                        <input type='checkbox' value={option} onChange={handleCheckbox} checked={selectedValues.includes(option)} />{option}
                    </label>
                ))
            }
        </div>
    </div>
  )
}

export default Checkbox