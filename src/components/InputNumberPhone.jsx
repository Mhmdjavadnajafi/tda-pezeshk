import React, { useState } from 'react'
import { motion } from 'framer-motion'

const InputNumberPhone = ({ placeholder, maxNumber = 11, onChange }) => {
    const [number, setNumber] = useState('')
    const [hasError, setHasError] = useState(false)
    const [isValid, setIsValid] = useState(false)

    const handleChange = (e) => {
        let value = e.target.value
        value = value.replace(/[^0-9]/g, '')

        if (value.length > maxNumber) value = value.slice(0, maxNumber)

        setNumber(value)
        if (onChange) onChange(value)

        if (value.length === maxNumber) {
            setIsValid(true)
            setHasError(false)
        } else if (value.length > 0) {
            setHasError(true)
            setIsValid(false)
        } else {
            setHasError(false)
            setIsValid(false)
        }
    }

    return (
        <motion.input
            value={number}
            type="text"
            placeholder={placeholder}
            onChange={handleChange}
            className="w-full h-13 rounded-2xl vazir-medium text-gray-500 px-5 my-3 focus:outline-none border-2"
            animate={
                hasError
                    ? { borderColor: "#F87171" } 
                    : isValid
                        ? { borderColor: "#34D399" } 
                        : { borderColor: "#D1D5DB" } 
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
        />
    )
}

export default InputNumberPhone
