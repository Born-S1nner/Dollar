import React, {useState} from 'react'

export default function Signup() {
  const [username, buildUsername] = useState('')
  const [email, buildEmail] = useState('')
  const [password, buildPassword] = useState('')

  const handleUsername = (e) => {
    buildUsername(e.target.value)
  }
  const handleEmail = (e) => {
    buildEmail(e.target.value)
  }
  const handlePassword = (e) => {
    buildPassword(e.target.value)
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
      </form>
    </div>
  )
}
