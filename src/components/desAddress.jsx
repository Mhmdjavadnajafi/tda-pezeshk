import { motion } from "framer-motion";
import { useState } from "react";

const DesAddress = ({ value = "", onChange }) => {
    const isError = value.length > 0 && value.length < 5;
    const isValid = value.length >= 5;

    return (
        <div className="w-[90%] mx-auto my-3 mb-30">
            <textarea
                placeholder="توضیحات مبدا و مقصد : اختیار"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`w-full py-3 h-[95px] rounded-xl vazir-medium px-5 text-[1rem] resize-none border-2 outline-none transition-colors duration-300
                    ${isError ? "border-red-400 text-red-500" : isValid ? "border-green-400 text-green-600" : "border-gray-300 text-gray-500"}`}
            />

            <motion.label
                className="vazir-medium block text-xs mt-1"
                initial={{ opacity: 0.3, x: 20 }}
                animate={{
                    opacity: isError ? 1 : 0,
                    x: isError ? 0 : 20,
                    color: isError ? "#EF4444" : "#9CA3AF"
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
            >
                آدرس کوتاه است
            </motion.label>
        </div>
    );
}

export default DesAddress;
