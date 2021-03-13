import React from 'react'

export default function Mapblogs({bloglines}) {
  const blogArr = bloglines.split(',');
  return (
    blogArr.map((blog, index) => 
      <li key={index}>
        {blog}
      </li>)
    )
}
