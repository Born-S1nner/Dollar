import React, {useState} from 'react'
import {useAuth} from '../auth/authic'

export default function MainPage({token}){
  
  const [bloglines, blogsChange] = useState('')
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

  fetch("http://127.0.0.1:5000/blog/public")
    .then(res => res.json())
    .then(data => blogsChange(data.blog))
  
  const blogArr = bloglines.split(',');
  console.log(blogArr)
  const DisplayBlogPost = blogArr.map((blog, index) => <li key={index}>{blog}</li>);
  console.log(DisplayBlogPost)  
  
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
        {DisplayBlogPost}
      </ul>
    </div>
  )
}
