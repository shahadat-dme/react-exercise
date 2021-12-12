import { useState, useRef } from 'react';

export default function RefInput() {
    const [randomInput, setRandomInput] = useState('');
    const renders = useRef(0);

    const handleChange = (e) => {
        setRandomInput(e.target.value);
      }

    return (
        <div>
        <input
        ref={renders}
        type="text"
        // value={randomInput}
        placeholder="Random Input"
        onChange={handleChange}
      />
            {/* <p>Renders: {renders.current}</p> */}
            <p>{randomInput}</p>
        </div>
    )
}
