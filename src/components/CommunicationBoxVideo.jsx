import React from "react";
const CommunicationBoxVideo = ({icon,title})=>{
    return(
        <div className="h-[100%] vazir-medium text-[#676767] col-span-5 bg-[#F2F2F2] rounded-sm flex justify-center text-xs gap-1 flex-1 p-2 items-center">
            <div>
                {icon}
            </div>
            <div>
                {title}
            </div>
        </div>
    )
}
export default CommunicationBoxVideo;