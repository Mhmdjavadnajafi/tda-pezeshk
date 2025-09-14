import React from "react";
import ImgTest from "../assets/images/2025-02-17_15-08-45 1 (3).png"
const DefaultTest = ()=>{
    return(
        <div className="mt-15 flex flex-col items-center">
            <img className='w-[134px] h-[128px]' src={ImgTest} alt="انتخاب کنید" />
            <div className="text-[#898989] vazir-medium text-bold mt-6">موردی انتخاب نشده است</div>
        </div>
    )
}
export default DefaultTest