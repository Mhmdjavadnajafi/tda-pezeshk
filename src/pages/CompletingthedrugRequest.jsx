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
import MessageRegistration from '../components/messageRegistration'
import MessageDrug from '../components/Drugmessage'

const CompletingthedrugRequest = () => {
    const navigate = useNavigate()
    return (
        <LoaderProvider>
            <div className='w-[100%] mx-auto relative'>
                <TestHeader onClick={() => navigate('/CompletDrug')} title={'تکمیل درخواست'} />
                <CompleteTitle title={'به خدمات خرید و ارسال دارو نیاز دارید ؟'} />
                <YesNo />
                <MessageDrug/>
                <LocationUser />
                <RequestButton onClick={() => navigate('/paymentDrug')} text={'تکمیل سفارش'} />
            </div>
        </LoaderProvider>
    )
}
export default CompletingthedrugRequest