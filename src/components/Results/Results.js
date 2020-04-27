import React from "react"

export default function Results(props) {
  return (
    <>
      <h1>Results</h1>
      {props.isActive === true ? <button onClick={props.handleTimer}>Restart</button> : ""}
    </>
  )
}