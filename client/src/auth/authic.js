import {createAuthProvider} from 'react-token-auth'

export const [useAuth, authFetch, login] = 
    createAuthProvider({
        accessTokenKey: 'access_token',
        onUpdateToken: (token) => fetch('http://127.0.0.1:5000/user/refresh', {
            method: "POST",
            body: token.access_token
        })
            .then(req => req.json())
    })
