import React from "react"
import { Link } from "react-router-dom"
import "./Homepage.css"


export default function Homepage(props) {
  console.log('Homepage', props)
  return (
    <div className="homepage">
      <h1>Anagrams</h1>
      <ol>
        <li>Come up with as many words you can</li>
        <li>A word has to be atleast 3 characters long</li>
        <li>To submit an answer just click the submit button or press you enter key</li>
        <li>Okay click 'Ready' to Begin</li>
      </ol>
      <Link to="/PlayGame" > <button className="ready" onClick={props.handleRandomPick}> Ready </button></Link>
    </div>
  )
}