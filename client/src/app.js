///Either use http://127.0.0.1:5000/ or https://dollardream.herokuapp.com/ for Post
import React, { useState, useEffect } from 'react'
import { authFetch, useAuth, logout } from './auth/authic'
import './app.css'
import Login from './account/login'
import Signup from './account/signup'
import MainPage from './main/mainscreen'

export default function App() {
    const [title, titleCard] = useState('')
    const [token, setToken] = useState();

    fetch('https://dollardream.herokuapp.com/')
        .then(res => res.json())
        .then(data => titleCard(data.get))

    const [logged] = useAuth()

    return (
        <div className="App">
            <h1 className="titleStyle">{title}</h1>
            <ul className="NavBar">
                <li className="NavItem"><Signup /></li>
                <li className="NavItem">{!logged? <Login setToken={setToken}/>: <button onClick={()=> logout()}>LogOut</button>}</li>
                <li className="NavItem"><IdentityCheck /></li>
            </ul>
            <div className="blogMain">
                <MainPage token={token}/>
            </div>
        </div>
    )

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
