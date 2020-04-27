import React from "react"
import { Link, Redirect } from "react-router-dom"
import "./PlayGame.css"

export default function PlayGame(props) {
  console.log('PlayGame function', props);
  function handleSubmit() {

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
      {props.isActive === true ? <Redirect to="/Results" /> : ""}
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