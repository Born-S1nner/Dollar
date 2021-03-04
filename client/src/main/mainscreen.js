import React, {useState} from 'react'

export default function MainPage(){
  const [bloglines, blogChange] = useState('')
  fetch("https://dollardream.herokuapp.com/blog/public")
    .then(res => res.json())
    .then(data => blogChange(data.blog))
  return (
    <div>
      <h5>bloglines</h5>
      {bloglines}
    </div>
  )
}
