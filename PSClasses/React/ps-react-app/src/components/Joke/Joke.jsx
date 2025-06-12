import React, { useEffect, useState } from 'react'
import './Joke.css'
const Joke = () => {
    const [allJokes, setAllJokes] = useState([]);
    const fetchJokes = async () => {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        setAllJokes((prev) => [...prev, data]);
    }

    useEffect(() => {
        fetchJokes()
    }, [])
    return (
        <React.Fragment>
            <h2>Joke Table</h2>
            <button onClick={fetchJokes}>Add More Jokes</button>
            <table>
                <thead>
                    <tr>
                        <th>Joke</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allJokes.map((j, index) => (
                            <tr key={index} style={{color: j.type=== 'programming' ? 'green' : 'blue'}}>
                                <td>
                                    <p><strong>Setup - </strong>{j.setup}</p>
                                    <p><strong>Punchline - </strong>{j.punchline}</p>
                                </td>
                                <td>{j.type}</td>
                            </tr>
                        ))

                    }
                </tbody>
            </table>
        </React.Fragment>

    )
}

export default Joke