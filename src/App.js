import React from 'react';
import './App.css';
import Fetch from './hooks/effect-fetch/Fetch';
import Fetch2 from './hooks/effect-fetch/Fetch2';




function App() {  

  return (
    <div className="App">
      <Fetch/>
      <Fetch2/>
    </div>
  );
}

export default App;
