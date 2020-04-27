import React from 'react'
import { Route, Switch } from "react-router-dom"
import './App.css';
import Homepage from "./components/Homepage/Homepage"
import PlayGame from "./components/PlayGame/PlayGame"
import Results from "./components/Results/Results"
import { useEffect, useState } from "react";

function App() {
  const [randomLetters, setRandomLetter] = useState([]);
  const [inputGuess, updateInputGuess] = useState('');
  //Now this is for my timer of 30 secs
  const [counter, setCounter] = React.useState(30);
  //Here is a boolean state that let react know when the timer should start 
  const [isActive, updateIsActive] = React.useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && counter > 0) {
      interval = setInterval(() => {
        setCounter(seconds => seconds - 1);
      }, 1000);
    } else if (!isActive && counter === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    //this will allow for the counter keep triggering itself - this information I leanred online not sure if is true
  }, [isActive, counter])

  function handleTimer(e) {
    //here when the button is click it will turn IsActive into true and commence the timer
    let bool = isActive
    if (counter === 30) {
      updateIsActive(!bool);
    } else if (counter === 0) {
      setCounter(30);
      // updateIsActive(!bool)

    }
  }
  function handleRandomPick() {
    console.log('In the function')
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
      "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let newWords = []
    for (let i = 0; i < 7; i++) {
      if (i === 0) newWords.push(vowels[Math.floor(Math.random() * vowels.length)]);
      newWords.push(alphabet[Math.floor(Math.random() * alphabet.length)])
    }
    setRandomLetter(newWords)
  }
  return (
    < div className="App" >
      <Switch>
        <Route path="/PlayGame">
          <PlayGame
            randomLetters={randomLetters}
            inputGuess={inputGuess}
            updateInputGuess={updateInputGuess}
            handleTimer={handleTimer}
            counter={counter}
            isActive={isActive}
          />
        </Route>
        <Route path="/Results">
          <Results
            handleTimer={handleTimer}
            isActive={isActive}
          />
        </Route>
        <Route path="/">
          <Homepage handleRandomPick={handleRandomPick} />
        </Route>
      </Switch>

    </div >
  );
}

export default App;
