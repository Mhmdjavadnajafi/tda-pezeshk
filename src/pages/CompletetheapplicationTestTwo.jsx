import React, { useState, useRef, useEffect } from 'react'
import TestHeader from '../components/HeaderTest'
import RequestButton from '../components/RequestButton'
import CompleteTitle from '../components/CompleteTitle'
import YesNo from '../components/YesOrNo'
import MessageComp from '../components/messageCompletetheapplication'
import ChoiceItem from '../components/ChoiseItem'
import LocationUser from '../components/LocationUser'
import { useNavigate } from "react-router-dom";
import LoaderProvider from './LoaderProvider'

const CompletetheapplicationTwo = () => {
    const navigate = useNavigate()
    const [yesNoSelected, setYesNoSelected] = useState(null)
    const [choiceSelected, setChoiceSelected] = useState(null)
    const [locationSelected, setLocationSelected] = useState(false)
    const choiceRef = useRef(null)

    const handleYesNoChange = (val) => {
        setYesNoSelected(val)

        if (val === "no") {
            setChoiceSelected(null)
            setLocationSelected(false)
        }
    }

    const isButtonActive =
        (yesNoSelected === "no") ||
        (yesNoSelected === "yes" && choiceSelected !== null)

    useEffect(() => {
        if (yesNoSelected === "yes" && choiceRef.current) {
            choiceRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [yesNoSelected])

    return (
        <LoaderProvider>
            <div className='w-[100%] mx-auto relative'>
                <TestHeader onClick={() => navigate('/Complete')} title={'تکمیل درخواست'} />

                <CompleteTitle title={'آیا نیاز به نمونه گیری و جواب دهی دارید ؟'} />
                <YesNo active={yesNoSelected} onChange={handleYesNoChange} />

                <MessageComp />

                <div ref={choiceRef}>
                    {/* وقتی "خیر" هست، غیرقابل انتخاب شوند */}
                    <ChoiceItem onChange={setChoiceSelected} disabled={yesNoSelected === "no"} />
                    <LocationUser onChange={setLocationSelected} disabled={yesNoSelected === "no"} />
                </div>

                <RequestButton
                    onClick={() => { if (isButtonActive) navigate('/payment') }}
                    bg={isButtonActive ? "bg-[#006ECF]" : "bg-gray-200"}
                    color={isButtonActive ? "text-white" : "text-gray-500"}
                    text={'تکمیل سفارش'}
                />
            </div>
        </LoaderProvider>
    )
}

export default CompletetheapplicationTwo
