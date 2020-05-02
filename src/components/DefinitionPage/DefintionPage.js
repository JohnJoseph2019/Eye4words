import React, { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import "./DefinitionPage.css"

export default function DefinitionPage(definitions) {
  console.log('Definition Page', definitions)
  const [definition, updateDefinition] = useState('')

  const apiCallDef = async (word) => {
    const response = await axios(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${process.env.REACT_APP_DEF}`)
    console.log(response.data);
    updateDefinition('display solution async function', response.data);
  }

  return (
    <div className="definitionPage">
      <Link to="/"><h1>Eye4Words</h1></Link>
    </div>
  )
}