import React from 'react'
import banner from "../assets/banner.png"
import "../styles/banner.scss"

const Banner = () => {
  return (
    <div className='ban'>
      <img src={banner} width={"1350px"} alt="" />
    </div>
  )
}

export default Banner