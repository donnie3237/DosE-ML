import React from 'react'
import './FirstPage.scss'

type Props = {}

const FirstPage = (props: Props) => {
    function closeFt(){
        const myFirst = document.getElementById('sayhi')
        myFirst.style.left = '100vw'
        myFirst.style.transition = 'all 0.3s'
    } 
  return (
    <div className='sayhi' id='sayhi'>
        <img src={require('./img/logo.png')} alt="" />
        <h1>DosE-ML</h1>
        <p>แอพลิเคชั่นนี้มีไว้สำหรับ เทรนโมเดลแมชีนเลิร์นนิ่งในTFJS เรื่องของการแยกแยะวัตถุ เพื่อไปประกอบการใช้งาน และประยุกต์ไปสู่การบูรณาการทำโมเดลได้</p>
        <a id='cfp' onClick={closeFt}>I GOT IT!!</a>
    </div>
  )
}

export default FirstPage