import React, { useState } from 'react'
import ButtonSubmit from './ButtonSubmit'
import { useNavigate } from 'react-router-dom'
import InputNumber from './InputNumberPhone'

const LoginBox = () => {
    const [allow, setAllow] = useState(false)
    const [hasError, setHasError] = useState(false)
    const navigate = useNavigate()

    return (
        <div className='w-full h-50 mt-10'>
            <div className='vazir-medium font-semibold text-lg text-[18px]'>ورود کاربر</div>
            <div className='vazir-medium text-gray-400 mt-5'>
                شماره همراه خود را وارد فرمایید
            </div>

            <InputNumber
                placeholder="شماره همراه"
                maxNumber={11}
                hasError={hasError}
                errorMessage="شماره باید دقیقاً 11 رقم باشد"
                onChange={(val) => {
                    if (val.length === 11) {
                        setAllow(true)
                        setHasError(false)
                    } else {
                        setAllow(false)
                        setHasError(true)
                    }
                }}
            />

            <ButtonSubmit
                onClick={() => {
                    if (allow) navigate('/register')
                }}
                bg={allow ? 'bg-[#006ECF]' : 'bg-gray-200'}
                borderColor={'border-gray-500'}
                color={allow ? 'text-white' : 'text-gray-500'}
                text={"ورود"}
            />
        </div>
    )
}

export default LoginBox
