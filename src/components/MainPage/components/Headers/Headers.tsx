import React from 'react'
import './Headwrs.css'

function Headers() {
  return (
    <div className="all">
        <div className="head">
            <div className="logo">
                <h2>DosE-ML</h2>
            </div>
            <div className="but-nav">
            <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </div>
        </div>
        <div className="nav">
            <a href="">one</a>
            <a href="">two</a>
            <a href="">three</a>
        </div>
    </div>
  )
}

export default Headers