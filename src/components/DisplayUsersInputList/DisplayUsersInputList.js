import React from 'react'
import "./DisplayUsersInputList.css"

export default function DisplayUsersInputList(props) {
  return (
    <div className="displayUsersInputList">
      {props.usersInputList.length > 0 ?
        <>
          <h3 className="score"> Your Score: {props.points}</h3>
          <div className="userList">
            {props.usersInputList.map(word =>
              <div key={word}>{word}</div>
            )}
          </div>
        </> :
        <div className="lost">No Points... better luck next time.</div>}
    </div >
  )
}