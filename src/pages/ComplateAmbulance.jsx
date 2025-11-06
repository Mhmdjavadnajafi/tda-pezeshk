import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import LoaderProvider from './LoaderProvider';

import TestHeader from '../components/HeaderTest';
import CompleteTitle from '../components/CompleteTitle';
import Persons from '../components/Person';
import Label from '../components/labelCard';
import InputText from '../components/InputText';
import InputNumber from '../components/InputNumberPhone';
import Chooseinsurance from '../components/Chooseinsurance';
import Symptoms from '../components/symptoms';
import ProvinceCityModal from '../components/origin';
import DestinationModal from '../components/destination';
import DesAddress from '../components/desAddress';
import RequestButton from '../components/RequestButton';

const ComplateAmbulance = () => {
    const navigate = useNavigate();
    const [fullName, setFullName] = useState("");
    const [nationalCode, setNationalCode] = useState("");
    const [bio, setBio] = useState("");
    const [address, setAddress] = useState("");
    const [originProvince, setOriginProvince] = useState(null);
    const [originCity, setOriginCity] = useState(null);
    const [destProvince, setDestProvince] = useState(null);
    const [destCity, setDestCity] = useState(null);

    const isFullNameError = fullName.length > 0 && fullName.length < 5;
    const isNationalCodeError = nationalCode.length > 0 && nationalCode.length < 10;
    const isBioError = bio.length > 0 && bio.length < 5;
    const isAddressError = address.length > 0 && address.length < 5;

    const isFormValid =
        fullName.length >= 5 &&
        nationalCode.length === 10 &&
        bio.length >= 5 &&
        address.length >= 5 &&
        originProvince && originCity &&
        destProvince && destCity;

    return (
        <LoaderProvider>
            <div className='w-[100%] mx-auto relative mb-10'>
                <TestHeader onClick={() => navigate('/Ambulance')} title='تکمیل درخواست' />
                <CompleteTitle title='دریافت خدمات' />
                <Persons />

                <div className='w-[90%] mx-auto mt-8'>
                    <Label labelName='نام و نام خانوادگی بیمار' />
                    <InputText
                        placeholder='مثال : اشکان حسنوندی'
                        value={fullName}
                        onChange={setFullName}
                        isValid={fullName.length >= 5}
                        hasError={isFullNameError}
                    />
                    <motion.label
                        className='vazir-medium block text-xs'
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

                <div className='w-[90%] mx-auto mt-4'>
                    <Label labelName='کد ملی' />
                    <InputNumber
                        placeholder='مثال : 1234567890'
                        value={nationalCode}
                        onChange={setNationalCode}
                        maxLength={10}
                        isValid={nationalCode.length === 10}
                        hasError={isNationalCodeError}
                    />
                    <motion.label
                        className='vazir-medium block text-xs my-2'
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

                <ProvinceCityModal
                    selectedProvince={originProvince}
                    setSelectedProvince={setOriginProvince}
                    selectedCity={originCity}
                    setSelectedCity={setOriginCity}
                />
                <DestinationModal
                    selectedProvince={destProvince}
                    setSelectedProvince={setDestProvince}
                    selectedCity={destCity}
                    setSelectedCity={setDestCity}
                />
                <DesAddress value={address} onChange={setAddress} />

                <div className='w-[90%] mx-auto mt-6'>
                    <RequestButton
                        onClick={() => isFormValid && navigate('/PaymentAmbulance')}
                        bg={isFormValid ? "bg-blue-500" : "bg-gray-200"}
                        color={isFormValid ? "text-white" : "text-gray-500"}
                        text='تکمیل سفارش'
                    />
                </div>
            </div>
        </LoaderProvider>
    );
};

export default ComplateAmbulance;
