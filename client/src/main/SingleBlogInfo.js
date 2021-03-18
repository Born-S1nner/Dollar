import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SingleBlog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogline: []
    }
  }

  getBlogLine({id}) {
    fetch(`http://127.0.0.1:5000/blog/public/${id}`)
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
  render() {
    return (
      <div>
        <div>{this.displayBlogs(this.state.blogline)}</div>
        <Link to='/home'>Return</Link>
      </div>
    )
  }
}

export default SingleBlog
