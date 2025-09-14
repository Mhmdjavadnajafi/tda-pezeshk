// InputNumber.jsx
import React, { useState } from 'react'

const InputNumber = ({ placeholder, maxNumber = 11, onChange }) => {
    const [number, setNumber] = useState('')

    const Onlythenumber = (e) => {
        const value = e.target.value
        if (value === '' || /^[0-9]+$/.test(value)) {
            const newValue = value.length > maxNumber ? value.slice(0, maxNumber) : value
            setNumber(newValue)

            if (onChange) onChange(newValue)
        }
    }

    return (
        <input
            value={number}
            type="text"
            onChange={Onlythenumber}
            className="w-full h-13 rounded-2xl vazir-medium text-gray-500 border border-gray-500 px-5 my-3"
            placeholder={placeholder}
        />
    )
}

export default InputNumber
