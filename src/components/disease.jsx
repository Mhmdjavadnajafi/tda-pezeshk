import React from 'react'

const Disease = ({ src, name }) => {
    return (
        <div className='col-span-2 mt-3 flex flex-col items-center justify-center'>
            <img src={src}></img>
            <div className='vazir-medium text-[12px] text-[#373737] mt-[13px] text-bold'>{name}</div>
        </div>
    )
}
export default Disease;