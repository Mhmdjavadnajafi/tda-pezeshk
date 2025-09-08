import React from 'react'
import HeaderContent from "../components/HeaderContent"
import { LuArrowRight } from "react-icons/lu";
const TestHeader = ({title}) => {
    return (
        <div className='w-[90%] relative mx-auto mt-10 mb-6 flex justify-center items-center'>
            <LuArrowRight className='absolute right-0 text-2xl' />
            <div className='vazir-medium text-xl text-[#262626]'>{title}</div>
        </div>
    )
}
export default TestHeader;