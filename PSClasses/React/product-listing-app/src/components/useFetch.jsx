import React, { useEffect, useState } from 'react'

const useFetch = ({url}) => {
    const [isLoading, setIsLoading] = useState(true);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [data, setData] = useState(null);
    useEffect(() =>{
        const fetchData = async () =>{
            try {
               const response = await fetch(url);
               if(!response.ok){
                    throw new Error("Network response was not ok");
               } 
               const result = await response.json();
               setData(result);
               setSuccess(true);
               setIsLoading(false)
            } catch (error) {
                console.error(error);
                setError(true)
            }
        }
        fetchData()
    }, [url])
  return (
    {isLoading, success, error, data}
  )
}

export default useFetch