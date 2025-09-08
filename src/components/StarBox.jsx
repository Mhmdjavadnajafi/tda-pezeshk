import React from "react";
import { FaRegStar } from "react-icons/fa";
const StarBox = ({star})=>{
    return(
        <div className="w-[70px] text-[#FF9E33] gap-2 px-1 rounded h-6 bg-[#F2F2F2] flex flex-row items-center justify-center">
            <FaRegStar />
            <div className="vazir-medium text-bold text-[15px] relative top-[4px] ">4.7</div>
        </div>
    )
}
export default StarBox;