import React from 'react'
import './Headwrs.css'

function Headers() {
    
    function openMenu(){
        const myNav = document.querySelector('.nav')
        myNav.style.top = '8vh'
        myNav.style.transition = 'all 0.5s'
    }
    function closeMenu(){
        const myNav = document.querySelector('.nav')
        myNav.style.top = '100vh'
        myNav.style.transition = 'all 0.5s'
    }
  return (
    <div className="all">
        <div className="head">
            <div className="logo">
                <h2>DosE-ML</h2>
            </div>
            <div className="but-nav" onClick={openMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </div>
            <div className="but-nav" onClick={closeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </div>
        </div>
        <div className="nav">
            <a href="">HOME</a>
            <a href="">Document</a>
            <a href="">GenerateModel</a>
        </div>
    </div>
  )
}

export default Headers