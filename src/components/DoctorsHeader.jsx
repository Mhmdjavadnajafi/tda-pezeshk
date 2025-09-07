import React from "react";
import ShowAll from "./ShowAll";
const HeaderDoctors = ()=>{
    return(
        <div className="w-[90%] mx-auto flex items-center justify-between">
            <div>
                <div className="vazir-medium text-gray-900 text-bold text-[21px]">ویزیت پزشک</div>
                <div className="vazir-medium text-gray-600 text-bold mt-1">بهترین ها همیشه در کنار شما</div>
            </div>
            <ShowAll></ShowAll>
        </div>
    )
}
export default HeaderDoctors