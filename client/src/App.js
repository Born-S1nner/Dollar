import React, { useState } from 'react'

export default function App() {
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
        console.log("submit works")
    }
    return (
        <div>
            <h1>hello</h1>
            <form action='#'>
                <div>
                    <input 
                        type="text"
                        value=''
                        placeholder="Username"
                        name="username"
                        //onChange={handleUsernameChange}
                    />
                </div>
                <div>
                    <input
                        type="text"
                        value=''
                        placeholder="Password"
                        name="password"
                        //onChange={handlePasswordChange}
                    />
                </div>
                <button onClick={onSubmitClick} type="submit">Login</button>
            </form>
        </div>
    )
}
