import React from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
const StartCounselingCard = ({onClick})=>{
    return(
        <button onClick={onClick} className={`w-[90%] mt-5 mx-auto h-12 text-[#006ECF] rounded-xl vazir-medium border border-[#006ECF] flex items-center justify-center gap-4 text-[1.2rem]`}> شروع مشاوره <RiArrowLeftSLine className="text-2xl" /></button>
    )
}
export default StartCounselingCard;