import React from "react"
import { Redirect } from "react-router-dom"

export default function DisplaySolution(props) {
  console.log('DisplaySolution', props)
  return (
    <>
      {props.solution.length > 0 ?
        <div>
          <h3>Solution</h3>
          {props.solution.map(word =>
            <div key={word} className="resultList">{word}</div>)
          }</div> : <Redirect to="/" />}
    </>

  )
}
