import React, { Component } from 'react';
import Portal from './portals'
import CONSTANTS from './constants'

const App = () => {

  return (
    <div className="App">
      
      <h1>Disparate</h1>
      <p>Some stuff</p>

      <Portal target={CONSTANTS.PORTALS.RECOMENDATIONS}>
        <h1>{CONSTANTS.PORTALS.RECOMENDATIONS}</h1>
        <p>Some more stuff</p>
      </Portal>

    </div>
  )
}

export default App;
