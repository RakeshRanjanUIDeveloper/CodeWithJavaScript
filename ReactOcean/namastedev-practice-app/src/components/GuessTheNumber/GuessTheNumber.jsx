import React, { useState } from 'react'
import './GuessTheNumber.css'
const GuessTheNumber = () => {
    const [myNumber, setMyNumber] = useState('');
    const [message, setMessage] = useState('');
    const [guessCount, setGuessCount] = useState(0);
    const [randomNumber, setRandomNumber] = useState(() => Math.floor(Math.random() * 100 + 1));

    const handleGuess = () =>{
        const guess = parseInt(myNumber);
        if(isNaN(guess) || guess<1 || guess> 10){
            setMessage("Please enter a number between 1 and 10")
            return;
        }
       if(guess === randomNumber){
            setMessage(`CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN ${guessCount} times`)
       }else if(guess > randomNumber) {
            setGuessCount(guessCount+1)
            setMessage("OOPS SORRY!! TRY A SMALLER NUMBER")
       }else{
            setGuessCount(guessCount+1)
            setMessage("OOPS SORRY!! TRY A GREATER NUMBER")
       }
    }
    const handleReset = (input) =>{
         setMyNumber('')
         setMessage('')
         setGuessCount(0)
         setRandomNumber(Math.floor(Math.random() * 100 + 1));
    }
  return (
    <div className='container'>
        <h2>Guess the Number</h2>
        <input type='text' value={myNumber} placeholder='Enter a number between 1 and 100' onChange={(e) => setMyNumber(e.target.value)} />
        <div className='buttons'>
            <div className='button' onClick={handleGuess}>Check Guess</div>
            <div className='button' onClick={handleReset}>Reset Game</div>
        </div>
        <div className='message'>
           <p>{message}</p> 
        </div>
    </div>
  )
}

export default GuessTheNumber