import React, { useState } from 'react'
import { login } from '../auth/authic'

export default function Login({setToken}) {
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
          console.log(token)
          setToken(token.access_token)
        } else {
          console.log("Wrong USERNAME/PASSWORD")
        }
      })
  }

  return (
    <div>
      <form action='#'>
        <h3>Login</h3>
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
        <button onClick={onSubmitClick} type="submit">Login</button>
      </form>
    </div>
  )
}