import React from 'react'
const ButtonSubmit = ({bg,color,borderColor,text,onClick})=>{
    return(
        <button onClick={onClick} className={`w-[90%] mx-auto border border-gray-300 h-14 my-2 ${bg} rounded-2xl vazir-medium ${color} border ${borderColor} flex items-center justify-center text-[1.2rem]`}>{text}</button>
    )
}
export default ButtonSubmit;