import React, { useState } from 'react'
import Login from './Login'
import { LoginContext } from './LoginContext'
import Profile from './Profile'

function App() {
    const [showProfile, setShowProfile] = useState(false)
    const [username, setUsername] = useState("");
    return (
        <>
            <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
            { showProfile ? <Profile/> : <Login/> }
            </LoginContext.Provider>
        </>
    )
}

export default App


/*
import App from './hooks/context/App';
    <App/>
*/