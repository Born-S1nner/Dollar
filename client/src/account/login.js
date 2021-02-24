import React from 'react'
import { useAuth, login, logout } from '../auth/authic'

export default function login() {
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
    fetch('https://baree.herokuapp.com/user/login', {
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
        } else {
          console.log("Wrong USERNAME/PASSWORD")
        }
      })
  }

  const [logged] = useAuth()
  return (
    <div>
      {!logged? <form action='#'>
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
      : <button onClick={()=> logout()}>LogOut</button>}
    </div>
  )
}
