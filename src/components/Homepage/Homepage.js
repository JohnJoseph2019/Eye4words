import React from "react"
import { Link } from "react-router-dom"


export default function Homepage() {
  return (
    <>
      <h1>Anagrams</h1>
      <ol>
        <li>You will be giving 7 letters</li>
        <li>You have 30sec. to find has many words as you can</li>
        <li>to submit and answer just click the submit or press you enter key</li>
        <li>Okay click 'Ready' to Begin</li>
      </ol>
      <Link to="/PlayGame">Ready</Link>
    </>
  )
}