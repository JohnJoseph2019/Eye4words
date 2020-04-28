import React from "react"
import { Link } from "react-router-dom"

export default function Results(props) {
  console.log(props);
  return (
    <>
      <h1>Results</h1>

      {props.solution.length > 0 ?
        props.solution.map(word =>
          <div key={word.word}>{word.word}</div>
        ) : ""}

      {props.isActive === true ?
        <Link to="/PlayGame"> <button onClick={props.handleTimer}>
          Restart
          </button></Link> : ""}

    </>
  )
}