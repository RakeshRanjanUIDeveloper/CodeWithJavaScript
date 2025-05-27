import React, { useState } from 'react'

const MyCheckbox = () => {
    const [liked, setLiked] = useState(false);
    const handleChange = (e) =>{
        console.log(e.target.checked);
        setLiked(e.target.checked)
    }
  return (
    <div>
        <label>
            <input type='checkbox' checked={liked} onChange={handleChange} />
            I Like this
        </label>
        <p>You {liked ? 'liked' : 'did not like'}</p>
    </div>
  )
}

export default MyCheckbox