import React from "react";
const CommunicationBox = ({icon,title})=>{
    return(
        <div className="h-[100%] overflow-hidden p-2 vazir-medium gap-1 text-[#676767] flex-1 bg-[#F2F2F2] rounded-sm flex justify-center text-xs items-center">
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