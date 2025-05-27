import React, { useState } from 'react'

const FormNestedObject = () => {
    const [person, setPerson] = useState({
        name:'Rakesh Ranjan',
        artwork : {
                title: 'Blue Nana',
                city: 'Hamburg',
                image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    })

    const handleName = (e) =>{
        setPerson({...person, name: e.target.value})
    }
    const handleTitle = (e) =>{
        setPerson({...person, artwork: {...person.artwork, title:e.target.value}})
    }
    const handleCity = (e) =>{
        setPerson({...person, artwork:{...person.artwork, city:e.target.value}})
    }
    const handleImageLink = (e) =>{
        setPerson({...person, artwork:{...person.artwork, image:e.target.value}})
    }
  return (
    <div>
        <label>Name : <input type='text' value={person.name} onChange={handleName} /></label>
        <label>Title : <input type='text' value={person.artwork.title} onChange={handleTitle} /></label>
        <label>City : <input type='text' value={person.artwork.city} onChange={handleCity} /></label>
        <label>Image Link : <input type='url' value={person.artwork.image} onChange={handleImageLink} /></label>

        <h2>{person.name} - {person.artwork.title} - {person.artwork.city}</h2>
        <img src={person.artwork.image} />
     </div>
  )
}

export default FormNestedObject