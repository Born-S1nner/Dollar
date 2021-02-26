import React, {useState} from 'react'

export default function Signup() {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const onSubmitProfile = (e) => {
    e.preventDeafault()
    console.log("Sign up")
    let details = {
      "username": username,
      "email": email,
      "password": password
    }
    fetch('http://127.0.0.1:5000/user/signup', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json' 
      },
      body: JSON.stringify(details)
    })
      .then(req => req.json())
  }

  return (
    <div>
      <h3>Signup</h3>
      <form action='#'>
        <div>
          <input 
            type="text"
            value={username}
            name="username"
            onChange={handleUsername}
            placeholder="Username"
          />
        </div>
        <div>
          <input 
            type="text"
            value={email}
            name="email"
            onChange={handleEmail}
            placeholder="Email"
          />
        </div>
        <div>
          <input 
            type="text"
            value={password}
            name="password"
            onChange={handlePassword}
            placeholder="Password"
          />
        </div>
        <button onClick={onSubmitProfile}>Sign-up</button>
      </form>
    </div>
  )
}
