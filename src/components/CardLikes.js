import React from 'react'
import "./cardLikes.css"

const CardLikes = () => {
  return (
    <div className='cardLikes'>
        <h1>Likes</h1>
        <div className='cardNumberLikes'>
            <p className='numberLikes'>140,948</p>
            <p className='numberLikesPersen'>11.28%</p>
        </div>
        <div className='cardContainerLikesBar'>
            <div className='cardLikesBar'></div>
        </div>
    </div>
  )
}

export default CardLikes