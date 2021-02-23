import {createAuthProvider} from 'react-token-auth'

export const [useAuth, authFetch, login] = 
    createAuthProvider({
        accessTokenKey: 'access_token',
        onUpdateToken: (token) => fetch('https://dollardream.herokuapp.com/user/refresh', {
            method: "POST",
            body: token.access_token
        })
            .then(req => req.json())
    })
