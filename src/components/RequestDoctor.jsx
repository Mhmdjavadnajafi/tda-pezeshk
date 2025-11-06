import React from "react";
import ArrowProfile from "./ProfileArrow";
const RequestDoctor = ()=>{
    return(
        <div className="w-[90%] mt-10 mb-10 mx-auto bg-[#F7F7F7] py-5 rounded-3xl px-6 text-[#5F5F5F] flex items-center justify-between">
            <div className="text-[14px] vazir-medium">
                درخواست همکاری پزشک
            </div>
            <ArrowProfile></ArrowProfile>
        </div>
    )
}
export default RequestDoctor