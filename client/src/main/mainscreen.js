import React, {useState} from 'react'
import {useAuth} from '../auth/authic'

export default function MainPage({token}){
  
  const [bloglines, blogsChange] = useState('')
  const [blog, setBlog] = useState('')

  const handleBlogChange = (e) => {
    setBlog(e.target.value)
  }
  
  fetch("http://127.0.0.1:5000/blog/public")
    .then(res => res.json())
    .then(data => blogsChange(data.blog))
  
  const onBlogSubmitClick = (e) => {
    e.preventDefault()
    let blogDetail = {"blog": blog}
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
          <form>
            <input
              type="text"
              value={blog}
              placeholder="Enter what's in your mind..."
              name="blog"
              onChange={handleBlogChange}
            />
            <button onClick={onBlogSubmitClick} type="submit">Enter</button>
          </form>
      </div>
    )
  }
}
