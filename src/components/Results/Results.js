import React from "react"
import { Redirect, Link, useLocation } from "react-router-dom"
import "./Results.css"
import RestartButton from "../RestartButton/RestartButton"
import DisplaySolution from "../DisplaySolution/DisplaySolution"

export default function Results(props) {
  console.log('Results', props);
  console.log('Results - useLocation', useLocation());
  const { points } = useLocation();

  return (
    <>
      {props.isActive === false ? <Redirect to="/" /> : ""}
      <h1>Results</h1>
      <div className="displayList">

        {props.usersInputList.length > 0 ? <div className="userList">
          <h3>Your Score: {points}</h3>
          {props.usersInputList.map(word =>
            <div key={word}>{word}</div>
          )}</div> : <div>No points... better luck next time.</div>}

        <DisplaySolution solution={props.solution} />

      </div>
      {props.isActive === true || props.usersInputList.length === 0 ?
        <Link to="/PlayGame">
          <RestartButton handleRestart={props.handleTimer} />
        </Link> : ""}
    </>
  )
}