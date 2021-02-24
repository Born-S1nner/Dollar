import React, {useState} from 'react'

export default function Signup() {
  const [username, buildUsername] = useState('')
  const [email, buildEmail] = useState('')
  const 

  const handleUsername = (e) => {
    buildUsername(e.target.value)
  }
  const handleEmail = (e) => {
    buildEmail(e.target.value)
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
      </form>
    </div>
  )
}
