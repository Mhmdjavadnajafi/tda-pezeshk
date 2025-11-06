import React from "react";
const HeaderDiseases = () => {
    return (
        <div className="w-[90%] mt-6 mx-auto flex items-center justify-between">
            <div>
                <div className="vazir-medium gap-3 flex items-center text-gray-900 text-bold text-[21px]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        className="w-4 h-4"
                    >
                        <defs>
                            <linearGradient id="whiteToPurple" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="white" />
                                <stop offset="100%" stopColor="purple" />
                            </linearGradient>
                        </defs>
                        <path
                            fill="url(#whiteToPurple)"
                            d="M256 8C119.043 8 8 119.083 8 256c0 136.957 111.083 248 248 248
          s248-111.043 248-248C504 119.083 392.957 8 256 8z"
                        />
                    </svg>
                   مشاوره بیماری ها
                </div>
                <div className="vazir-medium text-gray-600 text-bold mt-1">هدایت هوشمند به پزشک بر اساس بیماری انتخابی</div>
            </div>
        </div>
    )
}
export default HeaderDiseases