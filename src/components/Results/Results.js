import React from "react"
import { Link, useLocation } from "react-router-dom"
import "./Results.css"
import RestartButton from "../RestartButton/RestartButton"

export default function Results(props) {
  console.log('Results', props);
  console.log('Results - useLocation', useLocation());
  const { points } = useLocation();
  return (
    <>
      <h1>Results</h1>
      <div className="displayList">

        {props.usersInputList.length > 0 ? <div className="userList">
          <h3>Your Score: {points}</h3>
          {props.usersInputList.map(word =>
            <div key={word}>{word}</div>
          )}</div> : <div>No points... better luck next time.</div>}

        {props.solution.length > 0 ? <div>
          <h3>Solution</h3>
          {props.solution.map(word =>
            <div key={word}>{word}</div>
          )}</div> : ""}

      </div>



      {props.isActive === true || props.usersInputList.length === 0 ?
        <Link to="/PlayGame">
          <RestartButton handleTimer={props.handleTimer} />
        </Link> : ""}

    </>
  )
}