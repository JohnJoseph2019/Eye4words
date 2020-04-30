import React from "react"
import "./DisplayList.css"

export default function DisplayList(props) {

  console.log('DisplayList', props);
  console.log(props.cla)
  return (
    <div key={props.keyName} className={props.cla % 2 === 0 ? props.className : "sssss"} >{props.value}</div>
  )
}