import React, { useState } from 'react'
import DeActive from '../assets/images/Group 3506.png'
import Active from '../assets/images/Group 3505.png'
const Choice = ({Data}) => {
    const[active,setActive]=useState('')
    return (
        <div className='w-[90%] mx-auto'>
            {Data.map(item => {
                return (
                    <div key={item.id} className="flex items-center gap-4 my-10">
                        <img onClick={()=>setActive(item.id)} src={active === item.id ? Active : DeActive} alt={item.title} />
                        <div>
                            <div className='text-bold vazir-medium text-[16px]'>{item.title}</div>
                            <div className='text-bold vazir-medium mt-2 text-[#757575] text-[14px]'>{item.des1}</div>
                            <div className='text-bold vazir-medium my-2 text-[#757575] text-[14px]'>{item.des3}</div>
                            <div className='text-bold vazir-medium text-[#757575] text-[14px]'>{item.des2}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Choice