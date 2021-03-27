import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SingleBlog extends Component {

  DeleteBlogRow(e){
    let id = e.currentTarget.value
    fetch("http://127.0.0.1:5000/blog/private/"+id, {
      method: 'DELETE',
      headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json' 
      }
    })
    fetch("http://127.0.0.1:5000/blog/public")
      .then(res => res.json())
  }

  render() {
    return (
      <div>
      {this.props.blogline.map(row => 
        <div key={row.id} className="blogRow" >
          <p className='blog_blog'>{row.blog}</p>
          <button
            value={row.id.$oid}
            onClick={this.DeleteBlogRow} 
            className="blog_button"
          >
            <Link className="LinkStyle" to='/home'>Remove</Link>
          </button>
          <button className="blog_button">
            <Link className="LinkStyle" to='/home'>Return</Link>
          </button>
        </div>
      )}
      </div>
    )
  }
}

export default SingleBlog
