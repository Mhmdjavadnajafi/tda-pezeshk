import React from 'react'
import SelectBox from './selectBox';
import { NavLink } from 'react-router-dom';

const GeneralSelectorTest = () => {
    return (
        <div>
            <div className='w-[90%] mx-auto mt-5 flex flex-wrap gap-1 items-center'>
                <NavLink to="checkup">
                    {({ isActive }) => (
                        <SelectBox
                            className={`${isActive ? 'bg-blue-200 text-blue-700' : "bg-gray-200"} mt-1 vazir-medium text-[#8F8F8F] text-bold px-[6px] py-2 rounded-lg`}
                            title="چکاپ عمومی"
                        />
                    )}
                </NavLink>

                <NavLink to="men-health">
                    {({ isActive }) => (
                        <SelectBox
                            className={`${isActive ? 'bg-blue-200 text-blue-700' : "bg-gray-200"} text-bold mt-1 vazir-medium text-[#8F8F8F] px-[6px] py-2 rounded-lg`}
                            title="سلامت مردان"
                        />
                    )}
                </NavLink>

                <NavLink to="heart">
                    {({ isActive }) => (
                        <SelectBox
                            className={`${isActive ? 'bg-blue-200 text-blue-700' : "bg-gray-200"} text-bold mt-1 vazir-medium text-[#8F8F8F] px-[6px] py-2 rounded-lg`}
                            title="چکاپ قلب و عروق"
                        />
                    )}
                </NavLink>

                <NavLink to="women-health">
                    {({ isActive }) => (
                        <SelectBox
                            className={`${isActive ? 'bg-blue-200 text-blue-700' : "bg-gray-200"} mt-1 text-bold vazir-medium text-[#8F8F8F] px-[6px] py-2 rounded-lg`}
                            title="سلامت زنان"
                        />
                    )}
                </NavLink>

                <NavLink to="children-health">
                    {({ isActive }) => (
                        <SelectBox
                            className={`${isActive ? 'bg-blue-200 text-blue-700' : "bg-gray-200"} text-bold mt-1 vazir-medium text-[#8F8F8F] px-[6px] py-2 rounded-lg`}
                            title="سلامت کودکان"
                        />
                    )}
                </NavLink>

                <NavLink to="diabetes">
                    {({ isActive }) => (
                        <SelectBox
                            className={`${isActive ? 'bg-blue-200 text-blue-700' : "bg-gray-200"} mt-1 text-bold vazir-medium text-[#8F8F8F] px-[6px] py-2 rounded-lg`}
                            title="دیابت"
                        />
                    )}
                </NavLink>

                <NavLink to="prevention">
                    {({ isActive }) => (
                        <SelectBox
                            className={`${isActive ? 'bg-blue-200 text-blue-700' : "bg-gray-200"} text-bold mt-1 vazir-medium text-[#8F8F8F] px-[6px] py-2 rounded-lg`}
                            title="پیشگیری و سلامت" 
                        />
                    )}
                </NavLink>
            </div>
        </div>
    )
}

export default GeneralSelectorTest
