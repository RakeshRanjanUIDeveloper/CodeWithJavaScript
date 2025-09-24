import React from 'react'

type StatusProps = {
    status : 'Loading' | 'Success' | 'Error'
}
const Status = (props:StatusProps) => {
    let message;
    if(props.status === 'Loading'){
        message = "Loading..."
    }else if(props.status === 'Success'){
        message = "Data Fetched Successfully"
    }else if(props.status === 'Error'){
        message = "Error Fetching Data"
    }
  return (
    <div>
        <h2>Status - {message}</h2>
    </div>
  )
}

export default Status