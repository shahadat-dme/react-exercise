import React from 'react';

function Car(props) {
  return <h2>I am a { props.brand.model }!</h2>;
}

function Props2() {
  const carInfo = { name: "Ford", model: "Mustang" };
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <Car brand={ carInfo } />
    </>
  );
}

export default Props2;
