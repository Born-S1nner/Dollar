import React, {Component , useState} from 'react'

class MainPage extends Component{
  render() {
    const [bloglines, blogChange] = useState('')
    fetch("https://dollardream.herokuapp.com/blog/public")
      .then(res => res.json())
      .then(data => blogChange(data.blog))
    return (
      <div>
        {bloglines}
      </div>
    )
  }
}

export default MainPage;
