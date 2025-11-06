import React from "react";
import { MdOutlineArrowBackIos } from "react-icons/md";

const ProfileMenuItem = ({ title, icon,onClick,iconMenu,colorIcon,textColor }) => {
    return (
        <div className="w-full relative">
            <div className="flex cursor-pointer vazir-medium mt-9 items-center justify-between" onClick={onClick} >
                <div className="flex items-center justify-center gap-5">
                    <div className={`text-xl ${colorIcon}`}>
                        {icon}
                    </div>
                    <div className={`text-xl ${textColor} text-[#5F5F5F] text-gray-600`}>
                        {title}
                    </div>
                </div>
                <div className={`text-sm text-gray-400`}>
                    {iconMenu}
                </div>
            </div>
        </div>
    )
}
export default ProfileMenuItem