import React from 'react'
import arrow from './Assets/arrow.png'
import handIcon from "./Assets/hand_icon.png"
import heroImg from "./Assets/hero_image.png"
import './components.css'
const HeroSection = () => {
  return (
    <>
      <div className='hero-main '>
        <div className='container flex'>
        <div className='hero-left'>
            <h2 className='hero-heading1'>New Arrival Only</h2>
            <div className='hero-heading2'>
                <div className='hand-icon'>
                <p>new</p>
                    <img src={handIcon} alt='handIcon' />
                </div>
                <p>collection for everyone</p>
            </div>
            <button className='hero-btn'>Latest Collection <img src={arrow} alt='arrows' /></button>
        </div>
        <div className='hero-right'>
            <img src={heroImg} alt='heroImg' />
        </div>
        </div>
      </div>
    </>
  )
}

export default HeroSection
