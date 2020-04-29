import React from "react"
import "./DisplayList.css"

export default function DisplayList(props) {
  return (
    <div key={props.keyName} className={props.className}>{props.value}</div>
  )
}