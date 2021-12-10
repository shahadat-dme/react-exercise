import React from "react";

function Car() {
    return <h2>I am a Car!</h2>;
  }
  
  function CarFunction() {
    return (
      <>
        <h1>Who lives in my Garage?</h1>
        <Car />
      </>
    );
  }
export default CarFunction;