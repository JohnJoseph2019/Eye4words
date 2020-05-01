import React from "react"
import { Redirect } from "react-router-dom"
import "./DisplaySolution.css"

export default function DisplaySolution(props) {
  console.log('DisplaySolution', props)
  return (
    <div className="solutionList">
      <h3 className="solution">Solution</h3>
      {props.solution.length > 0 ?
        <div className="overflowSolution">
          {props.solution.map(word =>
            <div key={word} className="resultList">{word}</div>)
          }</div> : <Redirect to="/" />}
    </div>

  )
}
