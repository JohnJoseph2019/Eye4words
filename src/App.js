import React from 'react'
import { Route, Switch } from "react-router-dom"
import './App.css';
import axios from "axios"
import Homepage from "./components/Homepage/Homepage"
import PlayGame from "./components/PlayGame/PlayGame"
import Results from "./components/Results/Results"
import { useEffect, useState } from "react";

function App() {
  //This is for the all random letters
  const [randomLetters, setRandomLetter] = useState([]);
  //This is to receives the user's Input
  const [inputGuess, updateInputGuess] = useState('');
  //Now this is for my timer of 30 secs
  //This is an array of the input answer of the user
  const [usersInputList, updateUsersList] = useState([]);
  //Setting counter for the timer
  const [counter, setCounter] = React.useState(30);
  //Here is a boolean state that let react know when the timer should start and what happens when timer is zero
  const [Active, updateIsActive] = React.useState(false);
  //an Array of all possible solutions
  const [solution, setSolution] = React.useState([])

  useEffect(() => {
    let intervalTime = null;
    if (Active && counter > 0) {
      intervalTime = setInterval(() => {
        setCounter(sec => sec - 1);
      }, 1000);
    } else if (!Active && counter === 0) {
      clearInterval(intervalTime);
    }
    return () => clearInterval(intervalTime);
    //this will allow for the counter keep triggering itself - 
  }, [Active, counter])

  async function apiCall(newWords) {
    let word = newWords.join('');
    // console.log('async function start', word)
    const response = await axios(`https://cors-anywhere.herokuapp.com/http://www.anagramica.com/all/${word}`)

    // console.log("response.data = apiCall end", response.data)
    let wordsL3andMore = response.data.all.filter(word => word.length >= 3)
    // console.log("JustifuList = apiCall end", wordsL3andMore)
    setSolution(wordsL3andMore)
  }
  function handleTimer(e) {
    //here when the button is click it will turn IsActive into true and commence the timer
    let bool = Active
    if (counter === 30) {
      updateIsActive(!bool);
    } else if (counter === 0) {
      updateIsActive(!bool)
      setCounter(30);
      handleRandomPick();
      updateUsersList([]);
      updateInputGuess('')

    }
  }
  function handleRandomPick() {
    updateUsersList([]);
    setCounter(30)
    updateIsActive(false)
    // console.log('handleRandomPick function')
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
      "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let newWords = []
    for (let i = 0; i < 7; i++) {
      if (i === 0) newWords.push(vowels[Math.floor(Math.random() * vowels.length)]);
      newWords.push(alphabet[Math.floor(Math.random() * alphabet.length)])
    }
    setRandomLetter(newWords);
    apiCall(newWords);
  }

  return (
    < div className="App" >
      {/* <h1>learn React</h1> */}
      <Switch>
        <Route path="/PlayGame">
          <PlayGame
            randomLetters={randomLetters}
            inputGuess={inputGuess}
            updateInputGuess={updateInputGuess}
            handleTimer={handleTimer}
            counter={counter}
            isActive={Active}
            updateUsersList={updateUsersList}
            usersInputList={usersInputList}
            solution={solution}
            handleRandomPick={handleRandomPick}
          />
        </Route>
        <Route path="/Results">
          <Results
            handleTimer={handleTimer}
            isActive={Active}
            solution={solution}
            usersInputList={usersInputList}
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
