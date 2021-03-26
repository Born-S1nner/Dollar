///Either use http://127.0.0.1:5000/ or https://dollardream.herokuapp.com/ for Post
import React, { useState, useEffect } from 'react'
import { authFetch, useAuth, logout } from './auth/authic'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import './app.css'
import Refressh from './auth/Refressh'
import Login from './account/login'
import Signup from './account/signup'
import Inputblogs from './main/blog/bloginput'
import Main from './main/main'

export default function App() {
    const [message, setMessage] = useState('')
    const [title, titleCard] = useState('')
    const [token, setToken] = useState();
    const [refresh, setRefresh] = useState()
    const [logged] = useAuth()

    fetch('https://dollardream.herokuapp.com/')
        .then(res => res.json())
        .then(data => titleCard(data.get))

    function IdentityCheck() {
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
            <h5>Log in as {message}</h5>
        )
    }

    return (
        <Router>
        <div className="App">
            <h1 className="titleStyle">{title}</h1>
            <ul className="NavBar">
                <li className="NavItem"><Signup /></li>
                <li className="NavItem">
                    {!logged? <Login 
                    setToken={setToken}
                    setRefresh={setRefresh}
                    />: 
                    <button className='lgButton' onClick={()=> logout()}>
                        <Link to='/'>
                            LogOut
                        </Link>
                    </button>}
                </li>
                <li className="NavItem">
                    <Refressh 
                        refresh={refresh}
                        setToken={setToken}
                    />
                </li>
                <li className="NavItem"><IdentityCheck /></li>
            </ul>
            <div className="blogMain">
                <Inputblogs token={token} />
                <Route path='/home'><Main /></Route>
            </div>
        </div>
        </Router>
    )
}
