import React, { useState } from 'react'
const InputNumber = ({placeholder,onBlur,maxNumber})=>{
    const[number,setNumber]=useState('')
    const[Allow,SetAllow]=useState(false)
    const Onlythenumber = (e) => {
        const value = e.target.value;
        if (value === '' || /^[0-9]+$/.test(value)){
         if(value.length>=maxNumber){
            setNumber(value.slice(0,maxNumber))
         }else{
            setNumber(value)
         }
        }
    }
    return(
        <input onBlur={onBlur} value={number} type='text' onChange={Onlythenumber} className='w-full h-15 rounded-xl vazir-medium text-gray-500 border border-gray-500 text-[1.2rem] px-5 my-3' placeholder={placeholder}>

        </input>
    )
}
export default InputNumber;