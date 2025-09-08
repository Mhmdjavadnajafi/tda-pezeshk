import React from "react";
import Return from "./return";
import { useNavigate } from "react-router-dom";
const HeaderRegistration = ()=>{
    const back = useNavigate()
    return(
        <div className="w-full flex justify-between items-center">
            <div className="vazir-medium text-[##262626] font-bold text-xl">به سامانه تی دا خوش آمدید</div>
            <Return onClick={()=>back('/')}></Return>
        </div>
    )
}
export default HeaderRegistration;