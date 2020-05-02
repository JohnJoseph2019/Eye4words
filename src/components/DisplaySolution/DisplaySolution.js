import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"
import "./DisplaySolution.css"

export default function DisplaySolution(props) {
  //console.log('DisplaySolution', props)
  return (
    <div className="solutionList">
      <h3 className="solution">Solution</h3>
      {props.solution.length > 0 ?
        <div className="overflowSolution">
          {props.solution.map(word =>
            <Link className="resultList" key={word} to={`/Definition/${word}`}><div>{word}</div></Link>)
          }</div> : <Redirect to="/" />
      }
    </div >


  )
}
