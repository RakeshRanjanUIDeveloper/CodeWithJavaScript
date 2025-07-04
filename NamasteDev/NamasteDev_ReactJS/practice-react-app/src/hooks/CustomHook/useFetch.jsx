import { useEffect, useState } from "react";

function useFetch(url){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true)
    useEffect(() =>{
        setLoading(true);
        setError(null)
        fetch(url)
            .then((res) =>{
                if(!res.ok) throw new Error("Fetch failed")
                return res.json();
            })
            .then((data) =>{
                setData(data);
                setLoading(false);
            })
            .catch((err) =>{
                setError(err)
                setLoading(false)
            })
    }, [url])

    return {data, error, loading}
}
export default useFetch;