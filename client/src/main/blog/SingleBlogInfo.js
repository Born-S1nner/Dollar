import React, {Component} from 'react'
//import {Link} from 'react-router-dom'

class SingleBlog extends Component {

  render() {
//<Link to='/home'>Return</Link>
    return (
      this.props.blogline.map(row => 
        <div key={row.id} className="blogRow" >
          <p className='blog_blog'>{row.blog}</p>
          <button value={row.id} onClick={this.UpdateBlogRow} className="blog_button">Edit</button>
          <button className="blog_button">Remove</button>
        </div>
      )
    )
  }
}

export default SingleBlog
