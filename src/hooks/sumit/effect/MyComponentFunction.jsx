import React, { useEffect, useState } from 'react'

// export function App(){
//     const [ show, setShow] = useState(true)
//     return(
//         <>
//         <div>{ show ? <MyComponentFunction/> : App2}</div>
//         <p>
//         <button type="button" onClick={() => setShow((prevShow) => !prevShow)}>
//             { show ? 'Hide Post' : 'Show post'}
//         </button>
//         </p>
//         </>
//     )
// }

function MyComponentFunction() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('')
    const [date, setDate] = useState(new Date())


    const tick = () => {
        setDate(new Date());
    }

    useEffect(() => {
        document.title= `Clicked ${count} times`
    },[count])

    useEffect(() => {
        const interval = setInterval(tick, 1000)

        return () => {
            clearInterval(interval)
        }
    }, [])

    const addClick = () => {
        setCount((preCount) => preCount + 1)
    }
    return (
        
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            <p>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)}/>
            </p>
            <p>
                <button type="button" onClick={addClick}>
                    Click
                </button>
            </p>
        </div>
    )
}
export default MyComponentFunction;
