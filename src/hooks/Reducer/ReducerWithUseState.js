import React, { useState } from "react"

const ReducerWithUseState = () => {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>{count}</p>
            <button onClick = {() => setCount(count + 1)}>Inc</button>
            <button onClick = {() => setCount(count - 1)}>Dec</button>
        </div>
    )
}

export default ReducerWithUseState
