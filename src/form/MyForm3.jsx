import React, { useState } from "react";

function MyForm3() {
  const [inputs, setInputs] = useState({});

  const [textarea, setTextarea] = useState(
    "The content of a textarea goes in the value attribute"
  );

  const [myCar, setMyCar] = useState("Volvo");

  const handleChange2 = (event) => {
    setMyCar(event.target.value)
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleChange1 = (event) => {
    setTextarea(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        
        <textarea>
        Content of the textarea.
        </textarea>
        <input type="submit" />
        <textarea value={textarea} onChange={handleChange1} />

        <select value={myCar} onChange={handleChange}>
        <option value="Ford">Ford</option>
        <option value="Volvo">Volvo</option>
        <option value="Fiat">Fiat</option>
      </select>
    </form>
  )
}
export default MyForm3;