import React from "react"
import { Link } from "react-router-dom"
import "./Homepage.css"
import PointSystem from "../PointSystem/PointSystem"


export default function Homepage(props) {
  // console.log('Homepage', props)
  return (
    <div className="homepage">
      <h1>Eye4Words</h1>
      <h2>Find as many words as you can in under 30sec</h2>
      <PointSystem />
      <Link to="/PlayGame" > <button className="ready" onClick={props.handleRandomPick}> Ready </button></Link>
    </div>
  )
}