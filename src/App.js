import React from 'react'
import { Route, Switch } from "react-router-dom"
import './App.css';
import Homepage from "./components/Homepage/Homepage"
import PlayGame from "./components/PlayGame/PlayGame"
import Results from "./components/Results/Results"
import { useEffect, useState } from "react";

function App() {
  const [randomLetters, setRandomLetter] = useState([]);
  // useEffect(() => {

  // }, [])
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

    //console.log('randome', randomLetters);
    //console.log('newwords', newWords)
  }

  return (
    < div className="App" >
      <Switch>
        <Route path="/PlayGame">
          <PlayGame />
        </Route>
        <Route path="/Results">
          <Results />
        </Route>
        <Route path="/">
          <Homepage handleRandomPick={handleRandomPick} randomLetters={randomLetters} />
        </Route>
      </Switch>

    </div >
  );
}

export default App;
