import React, {useState} from 'react'
import {useAuth} from '../auth/authic'
import Mapblogs from './blogresults'

export default function MainPage({token}){

  const [blogMessage, setBlog] = useState('')

  const handleBlogChange = (e) => {
    setBlog(e.target.value)
  }

  const onBlogSubmitClick = (e) => {
    e.preventDefault()
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
    .then(req => req.json())
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
      <ul>
        <Mapblogs/>
      </ul>
    </div>
  )
}
