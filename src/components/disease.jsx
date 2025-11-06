import React from 'react'

const Disease = ({ name }) => {
    return (
        <div className='mt-1 px-4 rounded-3xl py-2 bg-gray-300'>
            <div className='vazir-medium text-[0.8rem] text-[#373737] text-bold'>{name}</div>
        </div>
    )
}
export default Disease;