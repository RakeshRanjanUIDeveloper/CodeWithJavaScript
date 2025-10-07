import React from 'react'

const Cartoon = ({cartoons}) => {
    const magnitudeGreaterThanFive = cartoons.filter((c) => c.magnitude > 5);
    const magnitudeEvenNumber = cartoons.filter((c) => c.magnitude%2===0);
    const intelligenceSuperPower = cartoons.filter((c) => c.superpower === 'Intelligence');

  return (
    <div>
        <h1> display all details of those characters whose magnitude is greater than 5. </h1>
        <ul>
            {
            magnitudeGreaterThanFive.map((c) => (
               <li key={c.id}>{c.name} - {c.superpower} - {c.magnitude}</li> 
            ))
        }
        </ul>
        <h1>display only the names of characters whose magnitude is an even number</h1>
        {
            magnitudeEvenNumber.map((c) => <h2 key={c.id}>{c.name}</h2>)
        }
        <h1> display the details of the character having that superpower</h1>
        <ul>
            {
                intelligenceSuperPower.map((c) =>(
                    <li key={c.id}>{c.name} - {c.superpower} - {c.magnitude}</li>
                ))
            }
        </ul>
    </div>
  )
}

export default Cartoon