import React from 'react'
import '../components/sidebar.css'

function sidebar() {
  return (
    <div className='wrapper container-fluid '>
      <h1>Notes App</h1>
     <button className='d-flex btn'>
        < i className="fa-regular fa-file-lines"></i>
        Notes
     </button>
       </div>
  )
}

export default sidebar
