import React,{ useContext } from 'react'
import { LoginContext } from "./LoginContext"

function Profile() {
    const {username} = useContext(LoginContext)
    return (

        <>
            <h1> Profile </h1>
            <h2> Username: {username}</h2>
        </>
    )
}

export default Profile
