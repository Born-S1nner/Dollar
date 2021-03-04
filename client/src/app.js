///Either use http://127.0.0.1:5000/ or https://dollardream.herokuapp.com/ for Post
import React, { useState, useEffect } from 'react'
import { authFetch, useAuth, logout } from './auth/authic'
import Login from './account/login'
import Signup from './account/signup'
import MainPage from './main/mainscreen'

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
                {!logged? <NavBar />: <button onClick={()=> logout()}>LogOut</button>}
            </div>
            <IdentityCheck />
            <div>
                <MainPage />
            </div>
        </div>
    )

    function NavBar() {
        return(
            <div>
                <Signup />
                <Login />
            </div>
        )
    }

    function IdentityCheck() {
        const [message, setMessage] = useState('')

        useEffect(() => {
            authFetch('http://127.0.0.1:5000/user/protect')
                .then(res => {
                    if (res.status === 422) {
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
