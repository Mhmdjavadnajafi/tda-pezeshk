import React from "react";

const CmBox = ({ icon, text }) => {
    return (
        <div className="px-2 py-2 flex-1 
            bg-[#F2F2F2] rounded-sm flex justify-center items-center 
            gap-1 text-[12px] vazir-medium text-[#676767]
        ">
            {icon}
            <span>{text}</span>
        </div>
    )
}

export default CmBox;
