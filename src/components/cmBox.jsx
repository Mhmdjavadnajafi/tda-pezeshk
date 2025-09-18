import React from "react";

const CmBox = ({ icon, text }) => {
    return (
        <div className="
            flex-1 min-w-[50px] max-w-[90px] h-[35px] 
            bg-[#F2F2F2] rounded-sm flex justify-center items-center 
            gap-1 text-[12px] vazir-medium text-[#676767]
        ">
            {icon}
            <span>{text}</span>
        </div>
    )
}

export default CmBox;
