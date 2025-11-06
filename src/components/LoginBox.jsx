// components/LoginBox.js
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonSubmit from './ButtonSubmit'
import InputNumberPhone from './InputNumberPhone'
import OtpService from '../services/otpService'
import { motion } from 'framer-motion'

const LoginBox = () => {
    const navigate = useNavigate()
    const [number, setNumber] = useState('')
    const [isValid, setIsValid] = useState(false)
    const [hasError, setHasError] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleChange = (val) => {
        let value = val.replace(/[^0-9]/g, '')
        if (value.length > 11) value = value.slice(0, 11)
        setNumber(value)
        if (value.length === 11 && value.startsWith('0')) {
            setIsValid(true)
            setHasError(false)
        } else if (value.length > 0) {
            setIsValid(false)
            setHasError(true)
        } else {
            setIsValid(false)
            setHasError(false)
        }
    }

    const handleSubmit = async () => {
        if (!isValid) return
        setLoading(true)
        try {
            await OtpService({ phoneNumber: number })
            localStorage.setItem('numberPhone', number)
            navigate('/register')
        } catch {
            setHasError(true)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className='w-full h-50 mt-5'>
            <div className='vazir-medium font-semibold text-lg text-[18px]'>ورود کاربر</div>
            <div className='vazir-medium text-gray-400 mt-5 mb-5'>شماره همراه خود را وارد فرمایید</div>
            <InputNumberPhone Type='tel' placeholder="شماره همراه" value={number} onChange={handleChange} isValid={isValid} hasError={hasError} maxLength={11} />
            <motion.label className='vazir-medium block my-2 text-xs' initial={{ opacity: 0.3, x: 0 }} animate={{ opacity: hasError ? 1 : 0, x: hasError ? 0 : 20, color: hasError ? "#EF4444" : "#9CA3AF" }} transition={{ duration: 0.4, ease: "easeInOut" }}>شماره تلفن را صحیح وارد فرمایید</motion.label>
            <ButtonSubmit onClick={handleSubmit} bg={isValid ? 'bg-[#006ECF]' : 'bg-gray-200'} borderColor={'border-gray-500'} color={isValid ? 'text-white' : 'text-gray-500'} text={loading ? 'در حال ارسال...' : 'ورود'} />
        </div>
    )
}

export default LoginBox
