import React, { useState, useEffect } from 'react'
import { authFetch, useAuth, logout } from './auth/authic'
import Login from './account/login'
export default function App() {
    const [title, titleCard] = useState('')

    fetch('https://dollardream.herokuapp.com/')
        .then(res => res.json())
        .then(data => titleCard(data.get))
    
        const [logged] = useAuth()
    return (
        <div>
            <h1>{title}</h1>
            <div>
            {!logged? <Login />: <button onClick={()=> logout()}>LogOut</button>}
            </div>
            <IdentityCheck />
            <p>World is Peace</p>
        </div>
    )
    function IdentityCheck() {
        const [message, setMessage] = useState('')

        useEffect(() => {
            authFetch('https://dollardream.herokuapp.com/user/protect')
                .then(res => {
                    if (res.status === 500) {
                        setMessage("Welcome Stanger, please Log in")
                        return null
                    }
                    return res.json()
                })
                .then(res => {
                    if (res && res.message) {
                        setMessage(res.message)
                    }
                })
        }, [])
        return(
            <h5>{message}</h5>
        )
    }
}
