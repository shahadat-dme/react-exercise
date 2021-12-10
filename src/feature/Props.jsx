import React from 'react';

function Car(props) {
  return <h2>I am a { props.brand }!</h2>;
}

function Props() {
  return (
    <>
	    <h1>Who lives in my garage?</h1>
	    <Car brand="Ford" />
    </>
  );
}
export default Props;