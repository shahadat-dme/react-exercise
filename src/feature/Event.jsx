import React from "react";

function Event() {
    const shoot = () => {
      alert("Great Shot!");
    }
  
    return (
      <button onClick={shoot}>Take the shot!</button>
    );
  }
export default Event;


{/* <button onClick={shoot}>Take the Shot!</button> */}   //React

{/* <button onclick="shoot()">Take the Shot!</button> */}  //HTML
