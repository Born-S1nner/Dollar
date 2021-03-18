import React, {Component} from 'react'

class BlogMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      loading: true
    }
    this.UpdateBlogRow = this.UpdateBlogRow.bind(this)
  }
  getBlogs() {
    fetch("http://127.0.0.1:5000/blog/public")
      .then(res => res.json())
      .then(json => {
        this.setState({
          blogs: json,
          loading: false
        })
      })
  }
  UpdateBlogRow(e) {
    console.log(e.currentTarget.value)
  }
  
  componentDidMount() {
    this.getBlogs();
  }

  displayBlogs = (blogs) => {
    return(
      blogs.map(row => 
        <div key={row.id} className="blogRow">
          <h5 className='blog_head'>{row.added_by}</h5>
          <p className='blog_blog'>{row.blog}</p>
          <button value={row.id} onClick={this.UpdateBlogRow} className="blog_button">Edit</button>
          <button className="blog_button">Remove</button>
        </div>  
      )
    )
  }

  render() {
    return(
      <div>
        {this.state.loading? <h5>Loading</h5> : this.displayBlogs(this.state.blogs)}
      </div>
    )
  }
}

export default BlogMaps;