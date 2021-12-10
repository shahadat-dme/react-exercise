import React from "react";

function Car(props) {
    return <li>I am a { props.brand }</li>;
  }
  
  function Lists() {
    const cars = ['Ford', 'BMW', 'Audi'];
    return (
      <>
        <h1>Who lives in my garage?</h1>
        <ul>
          {cars.map((car) => <Car brand={car} />)}
        </ul>
      </>
    );
  }
export default Lists;