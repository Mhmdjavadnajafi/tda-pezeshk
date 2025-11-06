// ComplateUltrasound.jsx
import React, { useState, useRef, useEffect } from 'react'
import TestHeader from '../components/HeaderTest'
import RequestButton from '../components/RequestButton'
import CompleteTitle from '../components/CompleteTitle'
import YesNo from '../components/YesOrNo'
import MessageComplateUltrasound from '../components/MessageCompUltraSound'
import SelectCenter from '../components/SelectCenter'
import { useNavigate } from "react-router-dom";
import LoaderProvider from './LoaderProvider'
import { getEncryptedCookie } from '../utils/cookieCrypto'
import { useQuery } from '@tanstack/react-query'
import getUser from '../services/getUser'

const ComplateUltrasound = () => {
    const navigate = useNavigate()
    const [needCenter, setNeedCenter] = useState("")
    const [selectedCenter, setSelectedCenter] = useState('')
    const centerRef = useRef(null)

    const handleNeedCenterChange = (val) => {
        setNeedCenter(val)
        if (val === "no") {
            setSelectedCenter('')
        }
    }
    const isButtonActive =
        (needCenter === "no") ||
        (needCenter === "yes" && selectedCenter)

    useEffect(() => {
        if (needCenter === "yes" && centerRef.current) {
            centerRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [needCenter])

    return (
        <LoaderProvider>
            <div className='w-[100%] mx-auto mb-10'>
                <TestHeader onClick={() => navigate('/ultrasound')} title={'تکمیل درخواست'} />

                <CompleteTitle title={'آیا نیاز به ثبت نوبت مرکز تصویر برداری دارید ؟'} />
                <YesNo
                    active={needCenter}
                    onChange={handleNeedCenterChange}
                />

                <MessageComplateUltrasound />

                <div
                    ref={centerRef}
                    className={`pb-10 ${needCenter === "no" ? "opacity-50 pointer-events-none" : ""}`}
                >                    <SelectCenter
                        onSelect={setSelectedCenter}
                        disabled={needCenter === "no"}
                    />
                </div>

                <RequestButton
                    onClick={() => {
                        if (isButtonActive) navigate('/paymentUltrasound')
                    }}
                    text={'تکمیل سفارش'}
                    bg={isButtonActive ? 'bg-blue-500' : 'bg-gray-300'}
                    color={isButtonActive ? 'text-white' : 'text-gray-500'}
                />
            </div>
        </LoaderProvider>
    )
}

export default ComplateUltrasound
