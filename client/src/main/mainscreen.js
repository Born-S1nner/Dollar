import React, {useState} from 'react'
import {useAuth} from '../auth/authic'

export default function MainPage(){
  const [bloglines, blogChange] = useState('')
  fetch("http://127.0.0.1:5000/blog/public")
    .then(res => res.json())
    .then(data => blogChange(data.blog))
  
  const onBlogSubmitClick = (e) => {
    e.preventDefault()
    let blogDetail = {"blogs": bloglines}
    fetch("http://127.0.0.1:5000/blog/public", {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${access_token}`,
        'Accept': 'application/json' 
      },
      body: JSON.stringify(blogDetail)
    })
    .then(req => req.json())
  }

  const blogArr = bloglines.split(',');
  console.log(blogArr)
  const DisplayBlogPost = blogArr.map((blog, index) => <li key={index}>{blog}</li>);
  console.log(DisplayBlogPost)  
  
  const [inputLogged] = useAuth()
  return (
    <div>
      <h4>bloglines</h4>
      {!inputLogged? <h5>Please Log in to send a message...</h5>:<BlogPostInput />}
      <ul>
        {DisplayBlogPost}
      </ul>
    </div>
  )

  function BlogPostInput() {
    return(
      <div>
        <input/><button onClick={onBlogSubmitClick}>Enter</button>
      </div>
    )
  }
}
