import React from "react"

export default function DisplaySolution(props) {
  console.log('DisplaySolution', props)
  return (
    <>
      {props.solution.length > 0 ?
        <div>
          <h3>Solution</h3>
          {props.solution.map(word =>
            <div key={word} className="resultList">{word}</div>)
          }</div> : <div className="noSolution">Wow this set does not have solution</div>}
    </>

  )
}
