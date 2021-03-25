import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import { login } from '../auth/authic'

export default function Login({setToken, setRefresh}) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const handleUsernameChange = (e) => {
    setUsername(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const onSubmitClick = (e) => {
    e.preventDefault()
    let detail = {
      'username': username,
      'password': password
    }
    fetch('http://127.0.0.1:5000/user/login', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json' 
      },
      body: JSON.stringify(detail)
    })
      .then(req => req.json())
      .then(token => {
        if (token.access_token) {
          login(token)
          setToken(token.access_token)
          setRefresh(token.refresh_token)
        } else {
          console.log("Wrong USERNAME/PASSWORD")
        }
      })
  }

  return (
    <div>
      <h3>Login</h3>
      <form className="NavItemDropContent" action='#'>
        <div>
          <input 
            type="text"
            value={username}
            placeholder="Username"
            name="username"
            onChange={handleUsernameChange}
          />
        </div>
        <div>
          <input
            type="text"
            value={password}
            placeholder="Password"
            name="password"
            onChange={handlePasswordChange}
          />
        </div>
        <button onClick={onSubmitClick} type="submit"><Link to='/home'>Login</Link></button>
      </form>
    </div>
  )
}
