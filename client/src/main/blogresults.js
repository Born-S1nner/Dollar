import React from 'react'

export default function Mapblogs({bloglines}) {
  const blogArr = bloglines.split(',');
  return (
    blogArr.map((blog) => 
      <li key={blog.id}>
        {blog}
      </li>)
    )
}
