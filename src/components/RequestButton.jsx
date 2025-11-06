import React from 'react'
import ButtonSubmit from "./ButtonSubmit"

const RequestButton = ({ text, onClick, bg, border, color }) => {
    return (
        <div className='max-w-[500px] mx-auto border border-gray-300 flex justify-center items-center bg-white fixed bottom-0 left-0 right-0 border-t border-gray-300'>
            <div className='w-full'>
                <ButtonSubmit
                    onClick={onClick}
                    color={color}
                    borderColor={border}
                    bg={bg}
                    text={text}
                />
            </div>
        </div>
    )
}

export default RequestButton;
