import React, { useState } from "react"
import { Redirect, useEffect } from "react-router-dom"
import axios from "axios"
import "./DisplaySolution.css"

export default function DisplaySolution(props) {
  //console.log('DisplaySolution', props)
  const [definition, updateDefinition] = useState('')

  const apiCallDef = async (word) => {
    const response = await axios(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=58b3800e-9f58-401e-ae22-2571b50f4d92`)
    console.log(response.data);
  }

  function lookUpword(word) {
    console.log(`This word ,${word} , was clicked`);
    apiCallDef(word);
  }

  return (
    <div className="solutionList">
      <h3 className="solution">Solution</h3>
      {props.solution.length > 0 ?
        <div className="overflowSolution">
          {props.solution.map(word =>
            <div key={word} className="resultList" onClick={() => lookUpword(word)}>{word}</div>)
          }</div> : <Redirect to="/" />}
    </div>

  )
}
