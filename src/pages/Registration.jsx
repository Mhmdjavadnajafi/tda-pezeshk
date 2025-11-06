import React, { useEffect, useState, useContext } from "react";
import { TimerProvider, TimerContext } from "../components/TimerContext";
import HeaderRegistration from "../components/headerRegistration";
import MessageRegistration from "../components/messageRegistration";
import InputNumber from "../components/InputNumberPhone";
import Timer from "../components/Timer";
import InputText from "../components/InputText";
import Label from "../components/labelCard";
import ButtonSubmit from "../components/ButtonSubmit";
import LoaderProvider from "./LoaderProvider";
import OtpService from "../services/otpService";
import OtpVerify from "../services/otpVerify";
import { useNavigate } from "react-router-dom";
import { setEncryptedCookie } from "../utils/cookieCrypto";
import { useAuth } from "../context/AuthProvider";
import UpdateInformation from "../services/UpdateInformation";
import { HiCheck } from "react-icons/hi";

const RegistrationForm = () => {
    const navigate = useNavigate();
    const { resetTimer, setStopTimer } = useContext(TimerContext);
    const { setUser } = useAuth();

    const [phoneNumber, setPhoneNumber] = useState("");
    const [otpCode, setOtpCode] = useState("");
    const [isOtpValid, setIsOtpValid] = useState(null);
    const [isLoadingOtp, setIsLoadingOtp] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false);
    const [fullName, setFullName] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [isNationalCodeValid, setIsNationalCodeValid] = useState(false);
    const [UserUuid, setUserUuid] = useState("");
    useEffect(() => {
        const phone = localStorage.getItem("numberPhone");
        if (!phone) {
            navigate("/login", { replace: true }); 
        }
    }, [navigate]);
    useEffect(() => {
        const savedPhone = localStorage.getItem("numberPhone");
        if (savedPhone) setPhoneNumber(savedPhone);
    }, []);

    const handleNationalCodeChange = (val) => {
        setNationalCode(val);
        setIsNationalCodeValid(val.length === 10);
    };

    const handleChange = async (val) => {
        if (isDisabled) return;
        setOtpCode(val);

        if (val.length === 4) {
            setIsLoadingOtp(true);
            try {
                const res = await OtpVerify({ phoneNumber, otp: val.trim() });
                if (res.success) {
                    setIsOtpValid(true);
                    setStopTimer(true);
                    const authData = { access: res.data.access, refresh: res.data.refresh, phone: phoneNumber };
                    setEncryptedCookie("auth", authData, { expires: 7 });
                    setUser(authData);

                    const profileRes = await fetch("https://api.tda24.ir/users/profile/", {
                        headers: { Authorization: `Bearer ${res.data.access}` },
                    });
                    const profileData = await profileRes.json();
                    if (profileData?.data?.length > 0) {
                        const profile = profileData.data[0];
                        setFullName(profile.fullName || "");
                        setNationalCode(profile.nationalCode || "");
                        setUserUuid(profile.userUuid);

                        const updatedUser = { ...authData, userUuid: profile.userUuid, fullName: profile.fullName, nationalCode: profile.nationalCode };
                        setUser(updatedUser);
                        setEncryptedCookie("profile", updatedUser, { expires: 7 });
                    }
                } else setIsOtpValid(false);
            } catch {
                setIsOtpValid(false);
            } finally {
                setIsLoadingOtp(false);
            }
        } else setIsOtpValid(null);
    };

    const isFormValid = isOtpValid && fullName.length >= 5;

    const handleReturn = () => {
        resetTimer();
        navigate("/login");
    };

    return (
        <LoaderProvider>
            <div className="w-[90%] mx-auto mt-5">
                <HeaderRegistration onReturn={handleReturn} />
                <MessageRegistration numberPhone={phoneNumber} />
                <div className="relative">
                    <InputNumber
                        placeholder="ورود کد"
                        value={otpCode}
                        onChange={handleChange}
                        maxNumber={4}
                        isValid={isOtpValid}
                        hasError={otpCode.length === 4 && isOtpValid === false}
                        disabled={isDisabled}
                        style={{ cursor: isDisabled ? "not-allowed" : "text", backgroundColor: isDisabled ? "#dcfce7" : "white", transition: "all 0.3s ease" }}
                    />
                </div>

                <div className="flex justify-between items-center my-4 flex-row-reverse">
                    <div className={`transition-opacity duration-300 ${isOtpValid ? "opacity-0" : "opacity-100"}`}>
                        <Timer />
                    </div>
                    <div className="flex items-center space-x-2">
                        {isLoadingOtp && <div>در حال بررسی کد...</div>}
                        {isOtpValid && !isLoadingOtp && (
                            <div className="text-green-500 flex items-center gap-2">
                                <HiCheck /> کد تایید شد
                            </div>
                        )}
                        {!isLoadingOtp && isOtpValid === false && <div className="text-red-500">کد ورود صحیح نیست</div>}
                    </div>
                </div>

                <Label labelName="نام و نام خانوادگی" />
                <InputText placeholder="مثال : اشکان حسنوندی" value={fullName} onChange={setFullName} />
                <div className="my-5">
                    <Label labelName="کد ملی / اختیاری" />
                    <div className="mt-2">
                        <InputNumber maxLength={10} placeholder="4060405531" value={nationalCode} onChange={handleNationalCodeChange} isValid={isNationalCodeValid} />
                    </div>
                </div>

                <ButtonSubmit
                    onClick={async () => {
                        if (!isFormValid) return;
                        const profileData = { fullName, nationalCode };
                        setEncryptedCookie("profile", profileData, { expires: 7 });
                        setUser((prev) => ({ ...prev, ...profileData, isAuthenticated: true }));
                        try {
                            await UpdateInformation({ userUuid: UserUuid, fullName, aboutMe: "", gender: "مرد", nationalCode, phoneNumber });
                        } catch { }
                        navigate("/content");
                    }}
                    bg={isFormValid ? "bg-[#006ECF]" : "bg-gray-200"}
                    borderColor="border-gray-500"
                    color={isFormValid ? "text-white" : "text-gray-500"}
                    text="ورود"
                />
            </div>
        </LoaderProvider>
    );
};

const Registration = () => (
    <TimerProvider>
        <RegistrationForm />
    </TimerProvider>
);

export default Registration;
