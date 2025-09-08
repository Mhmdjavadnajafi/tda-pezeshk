import React from "react";
import requestImg from '../assets/images/Group 3452.png'
import { useNavigate } from "react-router-dom";
const Registrationrequest = () => {
    const ToTest = useNavigate()
    return (
        <div onClick={()=>ToTest('/test')} className="h-[84px] w-full col-span-6">
            <img className="h-[84px] w-full" src={requestImg}></img>
        </div>
    )
}
export default Registrationrequest;