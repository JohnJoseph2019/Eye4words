import React from "react"
import { Link } from "react-router-dom"

export default function PlayGame() {
  return (
    <>
      <h1>PlaY Game</h1>
      <Link to="/Results"><button>Results</button></Link>
    </>
  )
}