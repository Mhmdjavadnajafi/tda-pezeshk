import React, { useState } from "react";
import TestHeader from "../components/HeaderTest";
import HeaderEditProfile from "../components/HeaderProfileEdit";
import InputsEditProfile from "../components/InputsEditProfile";
import ButtonSubmit from "../components/ButtonSubmit";
import { useNavigate } from "react-router-dom";

const EditProfile = () => {
    const navigate = useNavigate();
    const [hasChanges, setHasChanges] = useState(false); 

    return (
        <div className="w-full mx-auto relative">
            <TestHeader onClick={() => navigate("/profile")} title="ویرایش کاربر" />
            <HeaderEditProfile />
           <div className="w-[90%] mx-auto">
                <InputsEditProfile onChange={() => setHasChanges(true)} />
           </div>
            <div className="w-[90%] mx-auto py-5 fixed bottom-0 left-0 right-0">
                <ButtonSubmit
                    borderColor={hasChanges ? "border-blue-500" : "border-white"}
                    bg={hasChanges ? "bg-blue-500" : "bg-gray-200"}
                    color={hasChanges ? "text-white" : "text-gray-600"}
                    text="ثبت اطلاعات"
                />
            </div>
        </div>
    );
};

export default EditProfile;
