import React from "react"
import { Redirect, Link, useLocation } from "react-router-dom"
import "./Results.css"
import RestartButton from "../RestartButton/RestartButton"
import DisplaySolution from "../DisplaySolution/DisplaySolution"
import DisplayUsersInputList from "../DisplayUsersInputList/DisplayUsersInputList"


export default function Results(props) {
  // console.log('Results', props);
  // console.log('Results - useLocation', useLocation());
  const { points } = useLocation();

  return (
    <>
      {props.isActive === false ? <Redirect to="/" /> : ""}
      <Link to="/"><h1>Results</h1></Link>
      <div className="displayList">
        <DisplayUsersInputList usersInputList={props.usersInputList} points={points} />
        <DisplaySolution solution={props.solution} />
      </div>
      {props.isActive === true || props.usersInputList.length === 0 ?
        <Link to="/PlayGame">
          <RestartButton handleRestart={props.handleTimer} />
        </Link> : ""}
    </>
  )
}