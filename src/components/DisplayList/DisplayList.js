import React from "react"
import "./DisplayList.css"

export default function DisplayList(props) {

  // console.log('DisplayList', props);
  return (
    <div key={props.keyName} className={props.cla % 2 === 0 ? props.className : "letter2"} >{props.value}</div>
  )
}