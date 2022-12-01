import React from 'react'
import './Headwrs.css'

function Headers() {
    
    function openMenu(){
        const myNav = document.querySelector('.nav')
        const menu =    document.querySelector('.open')
        const close = document.querySelector('.close')
        myNav.style.top = '8vh'
        myNav.style.transition = 'all 0.5s'
        menu.style.display = 'none'
        close.style.display = 'flex'
        
    }
    function closeMenu(){
        const myNav = document.querySelector('.nav')
        const menu =  document.querySelector('.open')
        const close =document.querySelector('.close')
        myNav.style.top = '-100vh'
        myNav.style.transition = 'all 0.5s'
        menu.style.display = 'flex'
        close.style.display = 'none'
    }
  return (
    <div className="all">
        <div className="head">
            <div className="logo">
                <h2>DosE-ML</h2>
            </div>
            <div className="but-nav open" onClick={openMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            </div>
            <div className="but-nav close" onClick={closeMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" width="70%" height="70%" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
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