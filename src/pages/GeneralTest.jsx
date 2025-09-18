import React from 'react'
import { Outlet } from 'react-router-dom'
import TestHeader from "../components/HeaderTest"
import GeneralTestTitle from '../components/GeneralTestTitle'
import GeneralSelectorTest from '../components/SelectorGeneralTest'
import RequestButton from '../components/RequestButton'
import BorderGeneral from '../components/BordergeneralTest'
import { useNavigate } from "react-router-dom";
import LoaderProvider from './LoaderProvider'
const GeneralTest = () => {
    const navigate = useNavigate()
    return (
       <LoaderProvider>
            <div className='w-[100%] mx-auto relative'>
                <TestHeader onClick={() => navigate('/test')} title={'آزمایش عمومی وچکاپ'} />
                <GeneralTestTitle />
                <GeneralSelectorTest />
                <BorderGeneral></BorderGeneral>
                <div className="w-full">
                    <Outlet />
                </div>
                <RequestButton onClick={() => navigate('/Complete')} text={"تکمیل اطلاعات"} />
            </div>
       </LoaderProvider>
    )
}

export default GeneralTest
