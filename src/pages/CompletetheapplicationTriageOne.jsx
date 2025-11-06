import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LoaderProvider from "./LoaderProvider";
import TestHeader from "../components/HeaderTest";
import CompleteTitle from "../components/CompleteTitle";
import Persons from "../components/Person";
import Label from "../components/labelCard";
import InputText from "../components/InputText";
import InputNumberPhone from "../components/InputNumberPhone";
import Chooseinsurance from "../components/Chooseinsurance";
import Symptoms from "../components/symptoms";
import OrdersummaryTriage from "../components/OrdersummaryTriage";
import RequestButton from "../components/RequestButton";
import { getEncryptedCookie } from "../utils/cookieCrypto";
import { useQuery } from "@tanstack/react-query";
import getUser from "../services/getUser";

const CompletetheapplicationTriageOne = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [bio, setBio] = useState("");

    const isFullNameError = fullName.length > 0 && fullName.length < 5;
    const isNationalCodeError = nationalCode.length > 0 && nationalCode.length < 10;
    const isBioError = bio.length > 0 && bio.length < 5;

    const getToken = getEncryptedCookie("auth").access;

    const { data, error, isLoading } = useQuery({
        queryKey: ['user'],
        queryFn: () => getUser(getToken)
    });

    useEffect(() => {
        if (data && Array.isArray(data) && data.length > 0) {
            const user = data[0];
            setFullName(user.fullName || "");
            setNationalCode(user.nationalCode || "");
        }
    }, [data]);

    const isFormValid =
        fullName.length >= 5 &&
        // nationalCode.length === 10 &&
        bio.length >= 5;

    if (isLoading) return <LoaderProvider />;
    if (error) return <div>خطا در دریافت اطلاعات</div>;

    return (
        <LoaderProvider>
            <div className="w-[100%] mx-auto relative mb-30">
                <TestHeader onClick={() => navigate('/triage')} title="تکمیل درخواست" />
                <CompleteTitle title="دریافت خدمات" />
                <Persons />

                <div className="w-[90%] mx-auto mt-8">
                    <Label labelName="نام و نام خانوادگی بیمار" />
                    <InputText
                        placeholder="مثال : اشکان حسنوندی"
                        value={fullName}
                        onChange={setFullName}
                        isValid={fullName.length >= 5}
                        hasError={isFullNameError}
                    />
                    <motion.label
                        className="vazir-medium block text-xs"
                        initial={{ opacity: 0.3, x: 20 }}
                        animate={{
                            opacity: isFullNameError ? 1 : 0,
                            x: isFullNameError ? 0 : 20,
                            color: isFullNameError ? "#EF4444" : "#9CA3AF"
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        نام و نام خانوادگی باید حداقل ۵ کاراکتر باشد
                    </motion.label>
                </div>

                <div className="w-[90%] mx-auto mt-4">
                    <Label labelName="کد ملی" />
                    <InputNumberPhone
                        placeholder="مثال : 1234567890"
                        value={nationalCode}
                        onChange={setNationalCode}
                        maxLength={10}
                        isValid={nationalCode.length === 10}
                        hasError={isNationalCodeError}
                    />
                    <motion.label
                        className="vazir-medium block text-xs my-2"
                        initial={{ opacity: 0.3, x: 20 }}
                        animate={{
                            opacity: isNationalCodeError ? 1 : 0,
                            x: isNationalCodeError ? 0 : 20,
                            color: isNationalCodeError ? "#EF4444" : "#9CA3AF"
                        }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        کد ملی باید ۱۰ رقم باشد
                    </motion.label>
                </div>

                <Chooseinsurance />

                <Symptoms bio={bio} setBio={setBio} isError={isBioError} />

                <OrdersummaryTriage />

                <div className="w-[90%] mx-auto mt-6">
                    <RequestButton
                        onClick={() => isFormValid && navigate('/')}
                        bg={isFormValid ? "bg-[#006ECF]" : "bg-gray-200"}
                        color={isFormValid ? "text-white" : "text-gray-500"}
                        text="تکمیل اطلاعات"
                    />
                </div>
            </div>
        </LoaderProvider>
    );
};

export default CompletetheapplicationTriageOne;
