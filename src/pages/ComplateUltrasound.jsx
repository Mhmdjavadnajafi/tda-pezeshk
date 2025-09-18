import React from 'react'
import TestHeader from '../components/HeaderTest'
import RequestButton from '../components/RequestButton'
import CompleteTitle from '../components/CompleteTitle'
import YesNo from '../components/YesOrNo'
import MessageComp from '../components/messageCompletetheapplication'
import ChoiceItem from '../components/ChoiseItem'
import LocationUser from '../components/LocationUser'
import { useNavigate } from "react-router-dom";
import LoaderProvider from './LoaderProvider'
import MessageComplateUltrasound from '../../MessageComplateUltrasound'
import SelectCenter from '../components/SelectCenter'

const ComplateUltrasound = () => {
    const navigate = useNavigate()
    return (
        <LoaderProvider>
            <div className='w-[100%] mx-auto relative'>
                <TestHeader onClick={() => navigate('/ultrasound')} title={'تکمیل درخواست'} />
                <CompleteTitle title={'آیا نیاز به ثبت نوبت مرکز تصویر برداری دارید ؟'} />
                <YesNo />
                <MessageComplateUltrasound />
                <SelectCenter/>
                <RequestButton onClick={() => navigate('/paymentUltrasound')} text={'تکمیل سفارش'} />
            </div>
        </LoaderProvider>
    )
}
export default ComplateUltrasound