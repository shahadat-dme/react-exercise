import React from 'react';
import './App.css';
import ArrowFunction from './es6/ArrowFunction';
import ArrowSingleLine2 from './es6/ArrowSingleLine2';
import ClassComponents from './es6/ClassComponents';
import FunctionComponents from './es6/FunctionComponents';




function App() {
  return (
    <div className="App">
      <ClassComponents/>
      <FunctionComponents/>
      <ArrowFunction/>
      <ArrowSingleLine2/>
    </div>
  );
}

export default App;
