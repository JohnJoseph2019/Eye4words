import React, { useEffect } from "react"
import "./DisplayList.css"

export default function DisplayList(props) {
  useEffect(() => {
    // render();
  })
  return (
    <div key={props.keyName} className={props.className} >{props.value}</div>
  )
}