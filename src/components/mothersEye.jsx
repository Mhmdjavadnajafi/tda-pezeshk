import React from "react";
import EyeImg from '../assets/images/Group 3451.png'
import { useNavigate } from "react-router-dom";
const MothersEye = () => {
    const navigate = useNavigate()
    return (
        <div className="h-[84px] w-full col-span-6" onClick={() => navigate('/chatbot')}>
            <img className="h-[84px] w-full" src={EyeImg}></img>
        </div>
    )
}
export default MothersEye;