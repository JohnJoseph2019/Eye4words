import React, { useState } from "react"
import { Link, useParams } from "react-router-dom"
import axios from "axios"
import "./DefinitionPage.css"


export default function DefinitionPage(props) {
  const params = useParams();
  console.log('Definition Page', props)
  console.log('match', params.word);
  const [definitions, updateDefinition] = useState([])

  const apiCallDef = async (word) => {
    const response = await axios(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.REACT_APP_DEF}`)
    console.log(response.data);
    updateDefinition(response.data);
  }
  apiCallDef(params.word);
  return (
    <div className="definitionPage">
      <Link to="/"><h1>Eye4Words</h1></Link>
      <h3>{params.word}</h3>
      {definitions.length > 0 ? definitions.map(e =>
        <div>{e.shortdef[0]}</div>
      ) : ""}
    </div>
  )
}