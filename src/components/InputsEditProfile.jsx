import React, { useState } from "react";
import InputNumber from "./InputNumberPhone";
import Label from "./labelCard";
import InputText from "./InputText";
import TextBoxAboutMe from "./TextBoxAboutMe";
import { motion } from "framer-motion";

const InputsEditProfile = ({ onChange }) => {
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [aboutMe, setAboutMe] = useState("");

    const [isFullNameValid, setIsFullNameValid] = useState(true);
    const [isPhoneValid, setIsPhoneValid] = useState(true);
    const [isNationalCodeValid, setIsNationalCodeValid] = useState(true);

    const handleFullNameChange = (val) => {
        setFullName(val);
        setIsFullNameValid(val.length >= 5);
        onChange && onChange({ fullName: val });
    };

    const handlePhoneChange = (val) => {
        setPhoneNumber(val);
        setIsPhoneValid(val.length === 11);
        onChange && onChange({ phoneNumber: val });
    };

    const handleNationalCodeChange = (val) => {
        setNationalCode(val);
        setIsNationalCodeValid(val.length === 10 || val.length === 0);
        onChange && onChange({ nationalCode: val });
    };

    const handleAboutMeChange = (val) => {
        setAboutMe(val);
        onChange && onChange({ aboutMe: val });
    };

    return (
        <div className="w-[90%] mx-auto mt-7 mb-20">
            <Label labelName="نام و نام خانوادگی" />
            <InputText
                placeholder="اشکان حسنوندی"
                value={fullName}
                onChange={handleFullNameChange}
            />
            <motion.label
                initial={{ opacity: 0, x: 20 }}
                animate={{
                    opacity: !isFullNameValid ? 1 : 0,
                    x: !isFullNameValid ? 0 : 20,
                    color: "#EF4444"
                }}
                transition={{ duration: 0.3 }}
                className="vazir-medium block text-xs my-1"
            >
                نام و نام خانوادگی باید حداقل ۵ کاراکتر باشد
            </motion.label>

            <div className="mt-3">
                <Label labelName="شماره همراه" />
                <InputNumber
                    placeholder="09216919291"
                    maxLength={11}
                    value={phoneNumber}
                    onChange={handlePhoneChange}
                />
                <motion.label
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                        opacity: !isPhoneValid ? 1 : 0,
                        x: !isPhoneValid ? 0 : 20,
                        color: "#EF4444"
                    }}
                    transition={{ duration: 0.3 }}
                    className="vazir-medium block text-xs my-1"
                >
                    شماره همراه باید ۱۱ رقم باشد
                </motion.label>
            </div>

            <div className="mt-3">
                <Label labelName="کد ملی" />
                <InputNumber
                    placeholder="4060405531"
                    maxLength={10}
                    value={nationalCode}
                    onChange={handleNationalCodeChange}
                />
                <motion.label
                    initial={{ opacity: 0, x: 20 }}
                    animate={{
                        opacity: !isNationalCodeValid ? 1 : 0,
                        x: !isNationalCodeValid ? 0 : 20,
                        color: "#EF4444"
                    }}
                    transition={{ duration: 0.3 }}
                    className="vazir-medium block text-xs my-1"
                >
                    کد ملی باید ۱۰ رقم باشد
                </motion.label>
            </div>

            <div className="mt-3">
                <Label labelName="درباره من" />
                <TextBoxAboutMe
                    placeholder="چند خط درباره خودتان"
                    value={aboutMe}
                    onChange={handleAboutMeChange}
                />
            </div>
        </div>
    );
};

export default InputsEditProfile;
