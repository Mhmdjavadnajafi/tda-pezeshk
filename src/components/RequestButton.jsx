import React from 'react'
import ButtonSubmit from "./ButtonSubmit"
const RequestButton = ({text,onClick})=>{
    return(
        <div className='w-full mx-auto h-18 flex items-center bg-white fixed bottom-0 left-0 right-0 border-t border-gray-300'>
            <div className='w-[90%] mx-auto'>
                <ButtonSubmit onClick={onClick} borderColor={'border-blue-600'} bg={'bg-blue-600'} color={'text-white'} text={text}></ButtonSubmit>
            </div>
        </div>
    )
}
export default RequestButton;