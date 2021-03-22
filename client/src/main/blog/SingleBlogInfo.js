import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SingleBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogline: []
    }
  }

  getBlogLine() {
    fetch("http://127.0.0.1:5000/blog/private/605112fca3793a90b95e7993")
      .then(res => res.json())
      .then(json =>{ 
        this.setState({
          blogline: json
        })
      })
      .catch(err=> console.log(err))
    
  }

  displayBlogs = (blogline) => {
    return(
      blogline.map(row => 
        <div key={row.id} className="blogRow" >
          <h5 className='blog_head'>{row.added_by}</h5>
          <p className='blog_blog'>{row.blog}</p>
          <button value={row.id} onClick={this.UpdateBlogRow} className="blog_button">Edit</button>
          <button className="blog_button">Remove</button>
        </div>
      )
    )
  }

  componentDidMount() {
    this.getBlogLine()
  }

  render() {
    return (
      <div>
        {this.displayBlogs(this.state.blogline)}
        <Link to='/home'>Return</Link>
      </div>
    )
  }
}

export default SingleBlog
