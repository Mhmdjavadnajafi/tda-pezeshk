import React from "react";
import { motion } from "framer-motion";

const Biography = ({ value = "", onChange = () => { } }) => {
    const isError = value.length > 0 && value.length < 5;
    const isValid = value.length >= 5;

    return (
        <div className="w-full my-3">
            <textarea
                placeholder={
                    "لطفا شرح حال و علائم خود را وارد کنید ...\nمی‌توانید توضیحاتی برای درک بهتر پزشک از بیماری شما، شماره تلفن ضروری برای هماهنگی، پیچیدگی‌های آدرس محل ارائه خدمات و ... را توضیح دهید"
                }
                value={value}
                onChange={(e) => onChange(e.target.value)}
                className={`w-full py-3 h-[150px] rounded-xl vazir-medium px-5 text-[1rem] resize-none border-2 outline-none transition-colors duration-300
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
                شرح حال باید حداقل ۵ کاراکتر باشد
            </motion.label>
        </div>
    );
};

export default Biography;
