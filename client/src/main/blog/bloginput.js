import React, {useState} from 'react'
import {useAuth} from '../../auth/authic'

export default function Inputblogs({token}){

  const [blogMessage, setBlog] = useState('')

  const handleBlogChange = (e) => {
    setBlog(e.target.value)
  }

  const onBlogSubmitClick = (e) => {
    e.preventDefault()
    console.log("clicked")
    let blogDetail = {"blog": blogMessage}
    fetch("http://127.0.0.1:5000/blog/public", {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json' 
      },
      body: JSON.stringify(blogDetail)
    })
    .then(res => {
      if (res.status === 422) {
          alert("you need to hit Refresh button to Reset")
          return null
      }
      return res.json()
  })
    /// Make it where the blogs gets reloaded every time it clicks submit in react or python
  }

  const [inputLogged] = useAuth()
  return (
    <div>
      <h4>bloglines</h4>
      {!inputLogged? 
        <h5>Please Log in to send a message...</h5>:
        <form action='#'>
          <div>
          <input 
            type="text"
            value={blogMessage}
            placeholder="Type whatever its in your mind..."
            name="blogMessage"
            onChange={handleBlogChange}
          />
          </div>
          <button onClick={onBlogSubmitClick} type="submit">Enter</button>
        </form>}
    </div>
  )
}
