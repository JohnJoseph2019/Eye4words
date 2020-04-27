import React from "react"
import { Link } from "react-router-dom"

export default function Results(props) {
  return (
    <>
      <h1>Results</h1>
      {props.isActive === true ?
        <Link to="/PlayGame"> <button onClick={props.handleTimer}>
          Restart
          </button></Link> : ""}
    </>
  )
}