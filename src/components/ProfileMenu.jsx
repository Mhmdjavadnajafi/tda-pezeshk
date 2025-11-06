import React, { useContext } from "react";
import ProfileMenuItem from "./ProfileMenuItem";
import { LuDollarSign, LuLogOut } from "react-icons/lu";
import { TbPhoneCall } from "react-icons/tb";
import { FaRegFileLines } from "react-icons/fa6";
import { FiGitBranch } from "react-icons/fi";
import TdaIcon from '../assets/images/icon-tda.png';
import { MdOutlineArrowBackIos } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";
import { deleteCookie } from "../utils/cookieCrypto";

const ProfileMenu = () => {
    const navigate = useNavigate();
    const { logout } = useAuth();

    const handleLogout = () => {
        deleteCookie("auth");
        deleteCookie("profile");
        logout();
        navigate("/");
    };

    return (
        <div className="w-[90%] mt-10 mx-auto">
            <ProfileMenuItem
                onClick={() => navigate('/Inventoryincrease')}
                colorIcon="text-gray-400"
                title="افزایش موجودی"
                iconMenu={<MdOutlineArrowBackIos />}
                icon={<LuDollarSign />}
            />
            <ProfileMenuItem
                colorIcon="text-gray-400"
                title="پشتیبانی"
                iconMenu={<MdOutlineArrowBackIos />}
                icon={<TbPhoneCall />}
            />
            <ProfileMenuItem
                onClick={() => navigate('/Frequentlyaskedquestions')}
                colorIcon="text-gray-400"
                title="سوالات متداول"
                iconMenu={<MdOutlineArrowBackIos />}
                icon={<FaRegFileLines />}
            />
            <ProfileMenuItem
                colorIcon="text-gray-400"
                title="معرفی به دوستان"
                iconMenu={<MdOutlineArrowBackIos />}
                icon={<FiGitBranch />}
            />
            <ProfileMenuItem
                colorIcon="text-gray-400"
                onClick={() => navigate('/Rulesandregulations')}
                title="قوانین و مقررات"
                icon={<img src={TdaIcon} />}
            />
            <ProfileMenuItem
                colorIcon="text-red-800"
                onClick={handleLogout}
                title="خروج"
                icon={<LuLogOut />}
                textColor={'text-red-800'}
            />
        </div>
    );
};

export default ProfileMenu;
