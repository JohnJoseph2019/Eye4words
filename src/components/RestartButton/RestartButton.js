import React from "react"

export default function RestartButton(props) {
  return (
    <button className="restartButton" onClick={props.handleRestart}>
      Restart
    </button>
  )
}