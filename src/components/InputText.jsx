import React from 'react';
import { motion } from 'framer-motion';

const InputText = ({ value = '', onChange, placeholder }) => {
    const isValid = value.length >= 5;
    const hasError = value.length > 0 && value.length < 5;

    const handleChange = (e) => {
        onChange(e.target.value);
    };

    return (
        <motion.input
            value={value}
            onChange={handleChange}
            type="text"
            placeholder={placeholder}
            className="w-full h-14 rounded-2xl vazir-medium text-gray-500 px-5 my-3 focus:outline-none border-2"
            animate={{
                borderColor: hasError ? "#F87171" : isValid ? "#34D399" : "#D1D5DB"
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
        />
    );
};

export default InputText;
