import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getUser from "../services/getUser";
import LoaderProvider from "./LoaderProvider";
import { getEncryptedCookie } from "../utils/cookieCrypto";
import RequestButton from "../components/RequestButton";
import UpdateInformation from "../services/UpdateInformation";
import TestHeader from "../components/HeaderTest";
import Label from "../components/labelCard";
import InputText from "../components/InputText";
import InputNumberPhone from "../components/InputNumberPhone";
import TextBoxAboutMe from "../components/TextBoxAboutMe";
import { motion, AnimatePresence } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";
import Confetti from "react-confetti";

const EditProfile = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [aboutMe, setAboutMe] = useState("");
    const [userUuid, setUserUuid] = useState("");
    const [originalData, setOriginalData] = useState({});
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const getToken = getEncryptedCookie("auth").access;
    const navigate = useNavigate();

    const { data, error, isLoading } = useQuery({
        queryFn: () => getUser(getToken),
        queryKey: ["user"],
    });

    useEffect(() => {
        if (data && data.length > 0) {
            const user = data[0];
            setName(user.fullName || "");
            setPhone(user.phoneNumber || "");
            setNationalCode(user.nationalCode || "");
            setAboutMe(user.aboutMe || "");
            setUserUuid(user.userUuid || "");
            setOriginalData({
                fullName: user.fullName || "",
                phoneNumber: user.phoneNumber || "",
                nationalCode: user.nationalCode || "",
                aboutMe: user.aboutMe || "",
            });
        }
    }, [data]);

    useEffect(() => {
        setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        const handleResize = () =>
            setWindowSize({ width: window.innerWidth, height: window.innerHeight });
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const isNameValid = name.length >= 4;
    const isNationalCodeValid = nationalCode.length === 10;
    const hasChanged =
        name !== originalData.fullName ||
        nationalCode !== originalData.nationalCode ||
        aboutMe !== originalData.aboutMe;

    const isFormValid = isNameValid && isNationalCodeValid && hasChanged;

    if (isLoading) return <LoaderProvider />;
    if (error) return <div>خطا در دریافت اطلاعات</div>;

    const handleUpdate = async () => {
        if (!isFormValid || !userUuid) return;
        setIsSubmitting(true);
        try {
            await UpdateInformation({
                userUuid,
                fullName: name,
                aboutMe,
                nationalCode,
                phoneNumber: phone,
            });
            setShowSuccessModal(true);
            setTimeout(() => setShowSuccessModal(false), 2500);
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (<div className="w-full pb-10 relative">
        <TestHeader
            onClick={() => navigate("/profile")}
            title={"ویرایش پروفایل"}
        />
        <div className="w-[90%] mx-auto">
            <div>
                <Label labelName={"نام و نام خانوادگی"} />
                <InputText
                    value={name}
                    onChange={setName}
                    placeholder={"اشکان حسنوندی"}
                    isValid={isNameValid}
                    hasError={name.length > 0 && !isNameValid}
                />
            </div>

            <div className="mt-4 opacity-70">
                <Label labelName={"شماره تلفن"} />
              <div className="mt-2">
                    <InputNumberPhone
                        value={phone}
                        onChange={() => { }}
                        maxLength={11}
                        placeholder={"09216919291"}
                        disabled={true}
                        isValid={true}
                        hasError={false}
                    />
              </div>
            </div>

            <div className="mt-6">
                <Label labelName={"کد ملی"} />
                <div className="mt-2">
                    <InputNumberPhone
                        value={nationalCode}
                        onChange={setNationalCode}
                        maxLength={10}
                        placeholder={"4060405531"}
                        isValid={isNationalCodeValid}
                        hasError={nationalCode.length > 0 && !isNationalCodeValid}
                    />
                </div>
            </div>

            <div className="mt-3 pb-10">
                <Label labelName="درباره من" />
                <TextBoxAboutMe
                    value={aboutMe}
                    onChange={(e) => setAboutMe(e.target.value)}
                    placeholder="چند خط درباره خودتان"
                    isValid={true}
                    hasError={false}
                />
            </div>
        </div>

        <RequestButton
            bg={
                isFormValid && !isSubmitting ? "bg-blue-600" : "bg-gray-200"
            }
            color={
                isFormValid && !isSubmitting ? "text-white" : "text-gray-500"
            }
            onClick={handleUpdate}
            text={isSubmitting ? "در حال ارسال..." : "ثبت اطلاعات"}
        />

        <AnimatePresence>
            {showSuccessModal && (
                <>
                    <Confetti
                        width={windowSize.width}
                        height={windowSize.height}
                        recycle={false}
                        numberOfPieces={200}
                        gravity={0.3}
                    />
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.7, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.7, opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 30,
                            }}
                            className="bg-white rounded-2xl p-6 shadow-xl flex flex-col items-center w-[300px]"
                        >
                            <HiCheckCircle className="text-green-500 text-6xl mb-4 animate-bounce" />
                            <h3 className="text-lg font-bold text-gray-800 mb-2 vazir-medium">
                                ثبت اطلاعات
                            </h3>
                            <p className="text-gray-600 text-center vazir-medium">
                                اطلاعات با موفقیت ثبت شد.
                            </p>
                        </motion.div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    </div>
);
};

export default EditProfile;
