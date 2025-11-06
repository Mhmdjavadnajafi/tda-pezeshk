import React, { useState } from 'react'
import { Outlet, NavLink, useNavigate } from 'react-router-dom'
import TestHeader from "../components/HeaderTest"
import GeneralTestTitle from '../components/GeneralTestTitle'
import SelectBox from '../components/selectBox'
import BorderGeneral from '../components/BordergeneralTest'
import RequestButton from '../components/RequestButton'
import LoaderProvider from './LoaderProvider'

const GeneralTest = () => {
    const navigate = useNavigate()
    const [selectedTest, setSelectedTest] = useState(null)
    const isValid = selectedTest !== null

    const tests = [
        { to: "checkup", title: "چکاپ عمومی" },
        { to: "men-health", title: "سلامت مردان" },
        { to: "heart", title: "چکاپ قلب و عروق" },
        { to: "women-health", title: "سلامت زنان" },
        { to: "children-health", title: "سلامت کودکان" },
        { to: "diabetes", title: "دیابت" },
        { to: "prevention", title: "پیشگیری و سلامت" },
    ]

    return (
        <LoaderProvider>
            <div className='w-[100%] mx-auto relative'>
                <TestHeader onClick={() => navigate('/test')} title={'آزمایش عمومی وچکاپ'} />
                <GeneralTestTitle />
                <div className='w-[90%] mx-auto mt-5 flex flex-wrap gap-1 items-center'>
                    {tests.map(test => (
                        <NavLink key={test.to} to={test.to} onClick={() => setSelectedTest(test.to)}>
                            {({ isActive }) => (
                                <SelectBox
                                    className={`${selectedTest === test.to ? 'bg-blue-200 text-blue-700' : "bg-gray-200"} mt-1 vazir-medium text-[#8F8F8F] text-bold px-[6px] py-2 rounded-lg`}
                                    title={test.title}
                                />
                            )}
                        </NavLink>
                    ))}
                </div>
                <BorderGeneral />
                <div className="w-full">
                    <Outlet />
                </div>
                <RequestButton
                    onClick={() => { if (isValid) navigate('/Complete') }}
                    bg={isValid ? "bg-[#006ECF]" : "bg-gray-200"}
                    color={isValid ? "text-white" : "text-gray-500"}
                    text={"تکمیل اطلاعات"}
                />
            </div>
        </LoaderProvider>
    )
}

export default GeneralTest
