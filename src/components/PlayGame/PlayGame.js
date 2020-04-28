import React from "react"
import { Redirect } from "react-router-dom"
import "./PlayGame.css"

export default function PlayGame(props) {
  console.log('PlayGame function', props);
  function handleSubmit(e) {
    e.preventDefault();
    console.log(props.solution)

    let exist = false;
    for (let i = 0; i < props.solution.length; i++) {
      if (props.solution[i].word === props.inputGuess) {
        exist = true;
        break;
      }
    }
    if (exist === false) {
      let temp = props.usersInputList;
      temp.push(props.inputGuess)
      props.updateUsersList(temp);
      props.updateInputGuess('');
    }
  }
  function handleInput(e) {
    let guess = e.target.value;
    props.updateInputGuess(guess);
  }
  return (
    <>
      <h1>PlaY Game</h1>

      <div>Countdown: {props.counter} Sec.</div>
      {props.isActive === false ? <button onClick={props.handleTimer}>Start</button> : ""}
      {props.counter === 0 ? <Redirect to="/Results" /> : ""}
      <div className="displayList">
        {props.randomLetters.length !== 0 ? props.randomLetters.map((letter, idx) =>
          <div key={idx} className="letters">{letter}</div>)
          : ''}
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="inputGuess" onChange={handleInput} value={props.inputGuess} />
        <button >Submit</button>
      </form>
      {/* <Link to="/Results"><button>Results</button></Link> */}
    </>
  )
}