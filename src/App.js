import React from 'react';
import { Route, Switch } from "react-router-dom"
import './App.css';
import Homepage from "./components/Homepage/Homepage"
import PlayGame from "./components/PlayGame/PlayGame"
import Results from "./components/Results/Results"

function App() {

  return (
    <div className="App">
      <Switch>
        <Route path="/PlayGame">
          <PlayGame />
        </Route>
        <Route path="/Results">
          <Results />
        </Route>
        <Route path="/">
          <Homepage />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
