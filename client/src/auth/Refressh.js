import React from 'react'
import { login } from '../auth/authic'

export default function Refressh({setToken, refresh}) {
  let onRefreshClick = (e) => {
    e.preventDefault()
    fetch("http://127.0.0.1:5000/user/refresh", {
      method: "POST",
      header: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${refresh}`,
        'Accept': 'application/json'
      }
    })
    .then(token => {
      if (token.access_token) {
        login(token)
        setToken(token.access_token)
      } else {
        alert("You need to log out to reset")
      }
    })
  }
  return (
    <div>
      <button className='lgButton' onClick={onRefreshClick}>
        Refresh
      </button>
    </div>
  )
}
