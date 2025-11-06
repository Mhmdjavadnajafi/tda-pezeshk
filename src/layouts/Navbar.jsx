import React from "react";
import { FiUser, FiHome, FiClipboard } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="fixed mx-auto bottom-0 left-0 flex items-center text-[14px] justify-between px-6 py-2 bg-white border border-t border-gray-300 w-[100%] shadow-md z-100">

            {/* Home */}
            <NavLink
                to="/content"
                className={({ isActive }) =>
                    `flex flex-col items-center vazir-medium text-center gap-2 ${isActive ? "text-blue-500" : "text-[#676767]"
                    }`
                }
            >
                <FiHome className="text-[22px]" />
                <div>میز خدمت</div>
            </NavLink>

            {/* Medical Records */}
            <NavLink
                to="/Medicalrecords"
                className={({ isActive }) =>
                    `flex flex-col items-center vazir-medium text-center gap-2 ${isActive ? "text-blue-500" : "text-[#676767]"
                    }`
                }
            >
                <FiClipboard className="text-[22px]" />
                <div>پرونده پزشکی</div>
            </NavLink>

            {/* Profile */}
            <NavLink
                to="/profile"
                className={({ isActive }) =>
                    `flex flex-col items-center vazir-medium text-center gap-2 ${isActive ? "text-blue-500" : "text-[#676767]"
                    }`
                }
            >
                <FiUser className="text-[22px]" />
                <div>پروفایل کاربری</div>
            </NavLink>
        </div>
    );
};

export default Navbar;
