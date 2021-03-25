import React from 'react'

export default function Refressh() {
  let onRefreshClick = (e) => {
    e.preventDefault()
    console.log("REEEEE")
  }
  return (
    <div>
      <button className='lgButton' onClick={onRefreshClick}>
        Refresh
      </button>
    </div>
  )
}
