import React from "react";

const Biography = () => {
    return (
        <textarea
            placeholder={
                "لطفا شرح حال و علائم خود را وارد کنید ...\nمی‌توانید توضیحاتی برای درک بهتر پزشک از بیماری شما، شماره تلفن ضروری برای هماهنگی، پیچیدگی‌های آدرس محل ارائه خدمات و ... را توضیح دهید"
            }
            className="w-full py-3 h-[150px] rounded-xl vazir-medium text-gray-500 border border-gray-500 text-[1rem] px-5 my-3 resize-none"
        />
    );
};

export default Biography;
