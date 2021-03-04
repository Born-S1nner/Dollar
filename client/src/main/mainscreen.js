import React, {useState} from 'react'
import {useAuth} from '../auth/authic'

export default function MainPage(){
  const [bloglines, blogChange] = useState('')
  fetch("https://dollardream.herokuapp.com/blog/public")
    .then(res => res.json())
    .then(data => blogChange(data.blog))
  
  const onBlogSubmitClick = (e) => {
    e.preventDefault()
  }
  const [inputLogged] = useAuth()
  
  return (
    <div>
      <h4>bloglines</h4>
      {!inputLogged? <h5>Please Log in to send a message...</h5>:<BlogPostInput />}
      {bloglines}
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
