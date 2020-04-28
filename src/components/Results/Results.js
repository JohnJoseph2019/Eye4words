import React from "react"
import { Link } from "react-router-dom"
import "./Results.css"

export default function Results(props) {
  console.log(props);
  return (
    <>
      <h1>Results</h1>
      <div className="displayList">
        {props.solution.length > 0 ? <div>
          <h3>Solution</h3>
          {props.solution.map(word =>
            <div key={word.word}>{word.word}</div>
          )}</div> : ""}

        {props.usersInputList.length > 0 ? <div className="userList">
          <h3>Your answers</h3>
          {props.usersInputList.map(word =>
            <div key={word}>{word}</div>
          )}</div> : <div>Sorry You got none right</div>}

      </div>



      {props.isActive === true ?
        <Link to="/PlayGame"> <button onClick={props.handleTimer}>
          Restart
          </button></Link> : ""}

    </>
  )
}