import React, { Component } from 'react'
/*
import Inputblogs from './main/bloginput'
import BlogMaps from './main/blog/blogresults'
import SingleBlog from './main/blog/SingleBlogInfo'
*/
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

  setId(e) {
    let idme = e.currentTarget.value
    this.setState({
      identity: idme
    })
    console.log(this.state.identity)
  }

  displayBlogs = (blogs) => {
    //<Link to='/Blog'></Link>
    return(
      blogs.map(row => 
        <div key={row.id} className="blogRow">
            <h5 className='blog_head'>{row.added_by}</h5>
            <p className='blog_blog'>{row.blog}</p>
          <button className='blog_button' value={row.id} onClick={this.setId}>
            ...
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
        {this.state.loading? <h5>Loading</h5> : this.displayBlogs(this.state.blogs)}
      </div>
    )
  }
}
