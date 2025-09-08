import React from 'react'
import TestImg from '../assets/images/Group 3521.png'
const TestIMG = ({onClick})=>{
    return(
        <div className='w-[90%] h-[108px] mx-auto mt-2 mb-[15px]'>
            <img className='h-auto w-full' src={TestImg}></img>
        </div>
    )
}
export default TestIMG