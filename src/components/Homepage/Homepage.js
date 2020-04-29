import React from "react"
import { Link } from "react-router-dom"
import "./Homepage.css"
import PointSystem from "../PointSystem/PointSystem"


export default function Homepage(props) {
  console.log('Homepage', props)
  return (
    <div className="homepage">
      <h1>Let's mine for words</h1>
      <ol>
        <li>Giving a string of characters come up with as many words that you can</li>
        <li>A word has to be atleast 3 characters long</li>
        <li>To submit an answer just click the submit button or press you enter key</li>
        <li><PointSystem /></li>
      </ol>
      <Link to="/PlayGame" > <button className="ready" onClick={props.handleRandomPick}> Ready </button></Link>
    </div>
  )
}