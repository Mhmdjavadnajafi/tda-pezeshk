import React, { useEffect, useState } from 'react'
import InputNumber from './InputNumberPhone';
import ButtonSubmit from './ButtonSubmit';
import { useNavigate } from 'react-router-dom';
const LoginBox = ()=>{
    const[allow,setAllow]=useState(false)
      const navigate = useNavigate();
    useEffect(()=>{
        console.log(allow)
    },[allow])
    return(
        <div className='w-full h-50 mt-10'>
            <div className='vazir-medium font-semibold text-lg'>ورود کاربر</div>
            <div className='vazir-medium text-gray-400 mt-5 mb-'>شماره همراه خود را وارد فرمایید</div>
            <InputNumber maxNumber={11} onBlur={(e)=>{
               if(e.target.value.length === 11){
                setAllow(true)
               }else{
                setAllow(false)
               }
            }} placeholder={'شماره همراه'}></InputNumber>
            <ButtonSubmit
                onClick={() => navigate('/register')}
                bg={allow ? 'bg-[#006ECF]' : 'bg-gray-200'}
                borderColor={'border-gray-500'}
                color={allow ? 'text-white' : 'text-gray-500'}
                text={"ورود"}
            />

        </div>
    )
}
export default LoginBox;