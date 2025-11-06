import React, { useContext } from "react";
import { RiArrowLeftSLine } from "react-icons/ri";
import { TimerContext } from "../components/TimerContext"; // مسیر درست به TimerContext

const Return = ({ onClick }) => {
    const { resetTimer } = useContext(TimerContext);

    const handleClick = () => {
        resetTimer();  
        if (onClick) onClick(); 
    };

    return (
        <div
            onClick={handleClick}
            className="text-red-500 vazir-medium text-[#262626] font-bold flex items-center"
        >
            برگشت <RiArrowLeftSLine className="text-2xl" />
        </div>
    );
};

export default Return;
