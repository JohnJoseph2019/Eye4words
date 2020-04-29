import React from 'react'

export default function DisplayUsersInputList(props) {
  return (
    <div>
      {
        props.usersInputList.length > 0 ? <div className="userList">
          <h3>Your Score: {props.points}</h3>
          {props.usersInputList.map(word =>
            <div key={word}>{word}</div>
          )}</div> : <div>No points... better luck next time.</div>
      }
    </div>
  )
}