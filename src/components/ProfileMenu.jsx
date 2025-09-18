import React from "react";
import ProfileMenuItem from "./ProfileMenuItem";
import { LuDollarSign } from "react-icons/lu";
import { TbPhoneCall } from "react-icons/tb";
import { FaRegFileLines } from "react-icons/fa6";
import { FiGitBranch } from "react-icons/fi";
import TdaIcon from '../assets/images/icon-tda.png'
import { MdOutlineArrowBackIos } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
const ProfileMenu = () => {
    let navigate = useNavigate()
    return (
        <div className="w-[90%] mt-10 mx-auto">
            <ProfileMenuItem onClick={() => navigate('/Inventoryincrease')} colorIcon={'text-gray-400'} title={'افزایش موجودی'} iconMenu={<MdOutlineArrowBackIos />} icon={<LuDollarSign />}></ProfileMenuItem>
            <ProfileMenuItem colorIcon={'text-gray-400'} title={'پشتیبانی'} iconMenu={<MdOutlineArrowBackIos />} icon={<TbPhoneCall />}></ProfileMenuItem>
            <ProfileMenuItem onClick={() => navigate('/Frequentlyaskedquestions')} colorIcon={'text-gray-400'} title={'سوالات متداول'} iconMenu={<MdOutlineArrowBackIos />} icon={<FaRegFileLines />}></ProfileMenuItem>
            <ProfileMenuItem colorIcon={'text-gray-400'} title={'معرفی به دوستان'} iconMenu={<MdOutlineArrowBackIos />} icon={<FiGitBranch/>}></ProfileMenuItem>
            <ProfileMenuItem colorIcon={'text-gray-400'} onClick={() => navigate('/Rulesandregulations')} title={'قوانین و مقررات'} icon={<img src={TdaIcon} />}></ProfileMenuItem>
            <ProfileMenuItem colorIcon={'text-red-800'} onClick={()=>navigate('/')} title={'خروج'} icon={<LuLogOut />}></ProfileMenuItem>
        </div>
    )
}
export default ProfileMenu