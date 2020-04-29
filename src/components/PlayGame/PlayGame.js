import React, { useState } from "react"
import { Redirect } from "react-router-dom"
import "./PlayGame.css"
import RestartButton from "../RestartButton/RestartButton"

export default function PlayGame(props) {
  const [points, updatePoints] = useState(0);


  console.log('PlayGame function', props);

  function addPoints(word) {
    let point = 0;
    switch (word.length) {
      case 3:
        point += 100;
        break;
      case 4:
        point += 200;
        break;
      case 5:
        point += 300;
        break;
      case 6:
        point += 400;
        break;
      case 7:
        point += 500;
        break;
      default:
        break;
    }
    console.log('Score: ', point)
    point += points;
    updatePoints(point);
    console.log('total: ', point)

  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('In handle submit ', props.solution)
    if (props.isActive === true) {
      let exist = false;
      for (let i = 0; i < props.solution.length; i++) {
        if (props.solution[i] === props.inputGuess.toLowerCase() && !props.usersInputList.includes(props.inputGuess.toLowerCase())) {
          addPoints(props.inputGuess.toLowerCase())
          exist = true;
          break;
        }
      }
      if (exist === true) {
        let temp = props.usersInputList;
        temp.push(props.inputGuess)
        props.updateUsersList(temp);
      }
    }
    props.updateInputGuess('');
  }

  function handleInput(e) {
    let guess = e.target.value;
    props.updateInputGuess(guess);
  }


  return (
    <div className="playGame">

      <h1>PlaY Game</h1>

      <div className="countDown">Countdown: {props.counter} Sec.</div>
      {props.counter === 0 ? <Redirect to={
        {
          pathname: "/Results",
          points: points

        }} /> : ""}

      <div className="displayList">
        {props.randomLetters.length !== 0 ? props.randomLetters.map((letter, idx) =>
          <div key={idx} className="letters">{letter}</div>)
          : props.handleRandomPick()}
      </div>

      {props.isActive === false ?
        <div className="buttonList"><button className="startButton" onClick={props.handleTimer}>Start Time</button>
          <RestartButton handleRestart={props.handleRandomPick} /></div>
        : ""}

      <form onSubmit={handleSubmit}>
        <input type="text" name="inputGuess" onChange={handleInput} value={props.inputGuess} />
        <button className="submit">Submit</button>
      </form>
    </div>
  )
}