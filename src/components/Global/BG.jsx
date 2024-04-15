import React from 'react'
import BlueShadow from "../assets/icons/Blue.png"
import PurpleShadow from "../assets/icons/Purple.png"

function BG() {
  return (
    <div className='bgColor bgShadow'>
    <div className='container relative overflow-hidden '>
      
          <div className=''>
            <img width={700} height={700} className='absolute right-[-15rem] top-[-12rem]' src={BlueShadow} alt="" />
          </div>
          <div>
            <img width={700} height={700} className='absolute bottom-[-15rem] left-[-10rem]' src={PurpleShadow} alt="" />
          </div>
        </div>
       
    </div>
  )
}

export default BG