import React from 'react'
const InputText = ({placeholder,onChange})=>{
    return (
        <input onChange={onChange} className='w-full h-13 rounded-2xl vazir-medium text-gray-500 border border-gray-500 px-5 my-3' placeholder={placeholder}>

        </input>
    )
}
export default InputText;