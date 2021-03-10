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
        'Accept': 'application/json' 
      },
      body: JSON.stringify(blogDetail)
    })
    .then(req => req.json())
    .then(token => {
      if (token.access_token) {
        login(token)
        console.log(token)
      } else {
        console.log("Wrong USERNAME/PASSWORD")
      }
    })
  }
  const [inputLogged] = useAuth()

  const DisplayBlogPost = (bloglines) => {
    if (!bloglines.length) {
      return (
        <div>
          Not Working
        </div>
      )
    }
    return bloglines.map((blog, index) =>(
      <div key={index}>
        <h4>{blog.blog}</h4>
      </div>
    ))
  }
  
  return (
    <div>
      <h4>bloglines</h4>
      {!inputLogged? <h5>Please Log in to send a message...</h5>:<BlogPostInput />}
      <div>
        <DisplayBlogPost />
      </div>
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
