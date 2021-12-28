import React,{ useContext } from 'react'
import { LoginContext } from "./LoginContext"

function Login() {
    const { setUsername, setShowProfile } = useContext(LoginContext)
    return (
        <>
            <input
            type="text"
            placeholder='Username ...'
            onChange={(e) => {
                setUsername(e.target.value)
            }}
            />
            <input type="text" placeholder='password'/>
            <button onClick={() => {setShowProfile(true)}}>LogIn</button>
        </>
    )
}

export default Login
