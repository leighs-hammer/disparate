import React, { Component } from 'react';
import Portal from './portals'

const targets = {
  recs: document.getElementById('recs')
}

const App = () => {
  
  return (
    <div className="App">
      
      <h1>Disparate</h1>
      <p>Some stuff</p>

      <Portal name="reco" target={targets.recs}>
        <p>Some more stuff</p>
      </Portal>

    </div>
  )
}

export default App;
