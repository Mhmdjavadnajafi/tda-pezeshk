import { useState } from "react";

const AboutMeDr = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={`w-[90%] mx-auto mt-7 vazir-medium relative cursor-pointer 
        transition-all duration-500 ease-in-out
        ${isExpanded ? "min-h-[240px]" : "min-h-[100px]"}`}
        >
            <div className="text-[#676767] text-lg">
                نمونه گیر ما در محل لوکیشن شما حضور پیدا کرده و بعد از دریافت نمونه به
                سرعت به آزمایشگاه منتقل و جوابدهی خواهد شد و نتیجه در پرونده پزشکی اشکان
                حسنوندی درج میگردد .
            </div>
            <div
                className="text-xl left-0 mt-2 text-blue-600 py-3 font-bold w-full flex flex-row-reverse"
                onClick={() => setIsExpanded((prev) => !prev)}
            >
                {isExpanded ? "بستن" : "نمایش بیشتر"}
            </div>
        </div>
    );
};

export default AboutMeDr;
