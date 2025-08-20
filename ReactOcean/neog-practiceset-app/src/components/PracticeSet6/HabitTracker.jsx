import React from 'react'
import {useEffect, useState} from 'react'
import {fakeHabitFetch} from './api/fakeHabitFetch'
const HabitTracker = () =>{
    const [allHabits, setAllHabits] = useState([]);

    useEffect(() =>{
        fakeHabitFetch('https://example.com/api/habits')
        .then((res) =>{
            setAllHabits(res.data.habits)
        })
        .catch((err) =>{
            console.log(err.message)
        })
    })
    return (
        <React.Fragment>
            <h1>Habbit Tracker</h1>
            <ul>
                {
                    allHabits.map((h) =>(
                        <React.Fragment>
                            <li>{h.title}</li>
                            <p style={{margin:0}}>{h.desc}</p>
                            <h4 style={{margin:0}}>Days Followed : {h.daysFollowed}</h4>
                            <h4 style={{margin:0}}>Days Skipped : {h.daysSkipped}</h4>
                        </React.Fragment>
                    ))
                }
            </ul>
        </React.Fragment>
    )
}
export default HabitTracker


