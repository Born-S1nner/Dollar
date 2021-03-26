import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class SingleBlog extends Component {

  UpdateBlogRow(e) {
    let id = e.currentTarget.value
    console.log(id)
  }
  DeleteBlogRow(e){
    let id = e.currentTarget.value
    console.log(id)
  }

  render() {
    return (
      <div>
      {this.props.blogline.map(row => 
        <div key={row.id} className="blogRow" >
          <p className='blog_blog'>{row.blog}</p>
          <button 
            value={row.id.$oid}
            onClick={this.UpdateBlogRow} className="blog_button">
            Edit
          </button>
          <button className="blog_button">
            <Link to='/home'>
              Remove
            </Link>
          </button>
        </div>
      )}
      <button>
        <Link to='/home'>Return</Link>
      </button>
      </div>
    )
  }
}

export default SingleBlog
