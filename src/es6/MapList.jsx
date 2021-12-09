import React from "react";

function MapList() {
    const numbers = [1, 2, 3, 4, 5];

    // const numbers = props.numbers;
    const listItems = numbers.map((number) =>    <li>{number}</li>  );  return (
      <ul>{listItems}</ul>  );
  }
  


  export default MapList;