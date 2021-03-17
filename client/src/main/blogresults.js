import React, {Component} from 'react'

class BlogMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      loading: true
    };
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
  
  componentDidMount() {
    this.getBlogs();
  }

  displayBlogs = (blogs) => {
    return(
      blogs.map(row => 
        <div key={row.id} className={blogRow}>
          <h5>{row.added_by}</h5>
          <p>{row.blog}</p>
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
