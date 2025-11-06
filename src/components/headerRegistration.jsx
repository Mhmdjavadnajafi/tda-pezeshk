import React from "react";
import Return from "./Return";

const HeaderRegistration = ({ onReturn }) => {
    return (
        <div className="w-full flex justify-between items-center">
            <div className="vazir-medium text-[#262626] font-bold text-xl">
                به سامانه تی دا خوش آمدید
            </div>
            <Return onClick={onReturn} />
        </div>
    );
};

export default HeaderRegistration;
