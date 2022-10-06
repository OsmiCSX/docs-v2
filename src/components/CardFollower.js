import React from 'react'
import "./CardFollower.css"

const CardFollower = () => {
  return (
    <div className='cardFollower'>
        <h1>Followers</h1>
        <div className='cardNumber'>
            <p className='numberFollower'>9,350</p>
            <p className='numberPersen'>8.46%</p>
        </div>
        <div className='cardContainerFollowerBar'>
            <div className='cardFollowerBar'></div>
        </div>
    </div>
  )
}

export default CardFollower