import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri"; 
const Return =({onClick})=>{
    return(
        <div onClick={onClick} className="text-red-500 vazir-light text-[##262626] font-bold flex items-center">
            برگشت <RiArrowLeftSLine className="text-2xl" />
        </div>
    )
}
export default Return;