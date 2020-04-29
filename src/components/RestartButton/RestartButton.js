import React from "react"

export default function RestartButton(props) {
  console.log('RestartButton', props)
  return (
    <button className="restartButton" onClick={props.handleRestart}>
      Restart
    </button>
  )
}