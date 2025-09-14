import React from "react";
const CommunicationBox = ({icon,title})=>{
    return(
        <div className="h-[100%] overflow-hidden vazir-medium gap-1 text-[#676767] col-span-3 bg-[#F2F2F2] rounded-sm flex justify-center text-[12px] items-center">
            <div>
                {icon}
            </div>
            <div>
                {title}
            </div>
        </div>
    )
}
export default CommunicationBox;