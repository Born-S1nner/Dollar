import React, { useState } from 'react'

export default function App() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [title, titleCard] = useState('')

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    function IdentityCheck() {
        if (!onSubmitClick) {
            let license = 'Stanger'
            return(<h4>Hello {license}!</h4>)
        } else {
            let license = username
            return(<h4>Hello {license}!</h4>)
        }
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
            .catch(err => err)
    }
    fetch('https://baree.herokuapp.com/')
        .then(res => res.json())
        .then(data => titleCard(data.get))

    return (
        <div>
            <h1>{title}</h1>
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
                <form>

                </form>
            </div>
            <IdentityCheck />
        </div>
    )
}
