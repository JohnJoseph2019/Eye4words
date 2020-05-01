import React from "react"

export default function RestartButton(props) {
  return (
    <button className={props.className} onClick={props.handleRestart}>
      Restart
    </button>
  )
}