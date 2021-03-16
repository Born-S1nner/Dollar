import React, {Component} from 'react'

class Mapblogs extends Component {
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

  render() {
    return(
      this.state.blogs.map(row => 
        <div key={row.id}>
          {row.blog}
          {row.added_by.$oid}
        </div>  
      )
    )
  }
}

export default Mapblogs;
