import React from "react";
import { FaBookMedical } from "react-icons/fa";
const ExperienceBox = ()=>{
    return(
        <div className="w-[70px] mt-1 bg-blue-200 text-blue-500 gap-2 rounded h-6 flex flex-row-reverse items-center justify-center py-4">
            <FaBookMedical />
            <div className="vazir-medium relative top-[2px]" dir="ltr">+3500</div>
        </div>
    )
}
export default ExperienceBox