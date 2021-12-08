import React from 'react';
import './App.css';

import ReducerWithUseState from './hooks/Reducer/ReducerWithUseState';
// import ReducerWithUseReducer from './hooks/Reducer/ReducerWithUseReducer';
// import Uncontrolled2 from './forms/Uncontrolled2';
// import Controlled2 from './forms/Controlled2';

function App() {
  return (
    <div className="App">
      {/* <Controlled2/> */}
      {/* <Uncontrolled2/> */}
      {/* <ReducerWithUseReducer/> */}
      <ReducerWithUseState/>
    </div>
  );
}

export default App;
