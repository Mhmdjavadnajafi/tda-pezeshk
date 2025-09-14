import React from 'react'
import TestHeader from '../components/HeaderTest'
import RequestButton from '../components/RequestButton'
import CompleteTitle from '../components/CompleteTitle'
import YesNo from '../components/YesOrNo'
import MessageComp from '../components/messageCompletetheapplication'
import ChoiceItem from '../components/ChoiseItem'
import LocationUser from '../components/LocationUser'
import { useNavigate } from "react-router-dom";

const CompletetheapplicationTwo = () => {
    const navigate = useNavigate()
    return (
        <div className='w-[100%] mx-auto relative'>
            <TestHeader onClick={() => navigate('/Complete')} title={'تکمیل درخواست'} />
            <CompleteTitle title={'آیا نیاز به نمونه گیری و جواب دهی دارید ؟'}/>
            <YesNo/>
            <MessageComp/>
            <ChoiceItem/>
            <LocationUser/>
            <RequestButton onClick={()=>navigate('/payment')} text={'تکمیل سفارش'} />
        </div>
    )
}
export default CompletetheapplicationTwo