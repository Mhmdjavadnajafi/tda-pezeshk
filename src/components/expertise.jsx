import React from 'react'

const Expertise = ({src,name})=>{
    return(
        <div className='col-span-2 flex flex-col items-center justify-center'>
            <img src={src}></img>
            <div className='vazir-medium text-[#373737] mt-[13px] text-bold'>{name}</div>
        </div>
    )
}
export default Expertise;