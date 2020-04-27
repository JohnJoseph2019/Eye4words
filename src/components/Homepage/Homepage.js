import React from "react"
import { Link } from "react-router-dom"


export default function Homepage(props) {
  console.log('Homepage', props)
  return (
    <>
      <h1>Anagrams</h1>
      <ol>
        <li>You will get 7 letters</li>
        <li>You have 30sec. to type as many words as you can</li>
        <li>To submit an answer just click the submit button or press you enter key</li>
        <li>Okay click 'Ready' to Begin</li>
      </ol>
      <Link to="/PlayGame" > <button onClick={props.handleRandomPick}> Ready </button></Link>
    </>
  )
}