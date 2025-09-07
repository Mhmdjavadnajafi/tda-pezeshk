import React from "react";
import { FaStar } from "react-icons/fa";
const StarBox = ({star})=>{
    return(
        <div className="w-[50px] text-yellow-600 gap-2 px-1 rounded h-6 bg-yellow-200 flex flex-row-reverse items-center justify-center">
            <FaStar />
            <div className="vazir-medium relative top-[2px] ">4.7</div>
        </div>
    )
}
export default StarBox;