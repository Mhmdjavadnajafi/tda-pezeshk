import React from 'react'

const spanClasses = {
    1: "col-span-1",
    2: "col-span-2",
    3: "col-span-3",
    4: "col-span-4",
    5: "col-span-5",
}

const SelectBox = ({ title, col }) => {
    return (
        <div className={`h-[40px] vazir-medium gap-1 mt-1 text-[#676767] ${spanClasses[col]} bg-[#F2F2F2] rounded-xl flex justify-center text-[14px] items-center`}>
            <div>{title}</div>
        </div>
    )
}
export default SelectBox
