import React from "react"
import { Link } from "react-router-dom"

export default function RestartButton(props) {
  console.log('RestartButton', props)
  return (
    <button onClick={props.handleTimer}>
      Restart
    </button>
  )
}