import React, { Component } from 'react'
import {Route, Link} from 'react-router-dom'
import SingleBlog from './blog/SingleBlogInfo'
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      identity: '',
      blogs: [],
      loading: true
    }
    this.setId = this.setId.bind(this)
  }
  setId(e) {
    let idme = e.target.value
    this.setState({identity: idme})
    return (
      <Route path="/blog" component={<SingleBlog {...this.state} />} />
    )
  }
  getBlogs() {
    fetch("http://127.0.0.1:5000/blog/public")
      .then(res => res.json())
      .then(data => {
        this.setState({
          blogs: data,
          loading: false
        })
      })
  }
  
  displayBlogs = (blogs) => {
//<Link to='/blog'></Link>
    return(
      blogs.map(row => 
        <div key={row.id} className="blogRow">
          <h5 className='blog_head'>{row.added_by}</h5>
          <p className='blog_blog'>{row.blog}</p>
          <button 
            className='blog_button' 
            value={row.id}
            onClick={this.setId}
          >
            <Link to='/blog'>
              ...
            </Link>
          </button>
        </div>
      )
    )
  }
  componentDidMount() {
    this.getBlogs();
  }

  render() {
    return (
      <div>
        {this.load? this.state.loading : this.displayBlogs(this.state.blogs)}
      </div>
    )
  }
}
